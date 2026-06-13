"""
Canonical CV fixes. Run: python -X utf8 fix_cvs.py
"""

import zipfile, shutil, os, re
from pathlib import Path

CV_DIR = Path(r"F:\Freelance\2026\Personal Website\Portfolio_Website\public\cv")

# Shared italic/small formatting used in date runs
FONT_I19 = (
    '<w:rFonts w:asciiTheme="minorHAnsi" w:hAnsiTheme="minorHAnsi" w:cstheme="minorHAnsi"/>'
    '<w:i/><w:iCs/><w:color w:val="auto"/><w:sz w:val="19"/><w:szCs w:val="19"/>'
)
RUN_I19 = '<w:r w:rsidRPr="007446A8"><w:rPr>' + FONT_I19 + '</w:rPr>'


def patch_xml(xml):
    changes = []

    def rep(old, new, label):
        nonlocal xml
        if old in xml:
            xml = xml.replace(old, new)
            changes.append("OK  " + label)
        else:
            changes.append("--  " + label)

    # 1. Fortude title: "Product Manage" + "r" + " (FTC)" -> "Senior Product Manager"
    rep(
        '<w:t>Product Manage</w:t></w:r>',
        '<w:t>Senior Product Manager</w:t></w:r>',
        "Fortude: Product Manager (FTC) -> Senior Product Manager (step 1/2)"
    )
    # Remove the leftover "r" and " (FTC)" runs that follow
    rep(
        '<w:r><w:rPr><w:rFonts w:asciiTheme="minorHAnsi" w:hAnsiTheme="minorHAnsi" w:cstheme="minorHAnsi"/>'
        '<w:b/><w:bCs/><w:color w:val="auto"/><w:sz w:val="21"/><w:szCs w:val="21"/></w:rPr>'
        '<w:t>r</w:t></w:r>'
        '<w:r w:rsidR="008A6067"><w:rPr><w:rFonts w:asciiTheme="minorHAnsi" w:hAnsiTheme="minorHAnsi" w:cstheme="minorHAnsi"/>'
        '<w:b/><w:bCs/><w:color w:val="auto"/><w:sz w:val="21"/><w:szCs w:val="21"/></w:rPr>'
        '<w:t xml:space="preserve"> (FTC)</w:t></w:r>',
        '',
        "Fortude: remove leftover r + (FTC) runs (step 2/2)"
    )

    # 2. Pipeline numbers (appear in single text node)
    rep(
        'SAR 7M+ pipeline with SAR 700K in immediate conversions',
        'SAR 7.5M pipeline with SAR 750K in immediate conversions',
        "Pipeline: SAR 7M+ -> SAR 7.5M, SAR 700K -> SAR 750K"
    )
    rep('SAR 7M+', 'SAR 7.5M', "SAR 7M+ -> SAR 7.5M (standalone)")
    rep('SAR 700K', 'SAR 750K', "SAR 700K -> SAR 750K (standalone)")

    # 3. Sling end date (isolated text node)
    rep('<w:t>May 2024</w:t>', '<w:t>October 2024</w:t>',
        "Sling end date: May 2024 -> October 2024")

    # 4. Win Authority start date: Aug + ust + " 2018" -> "July 2018"
    win_start_old = (
        '<w:t>Aug</w:t></w:r>'
        '<w:r w:rsidR="004E7F2E"><w:rPr>' + FONT_I19 + '</w:rPr><w:t>ust</w:t></w:r>'
        + RUN_I19 + '<w:t xml:space="preserve"> 2018</w:t>'
    )
    rep(win_start_old,
        RUN_I19 + '<w:t>July 2018</w:t>',
        "Win Authority start: August 2018 -> July 2018")

    # 4b. Win Authority end date: Dec + ember + " 2019" -> "August 2020"
    win_end_old = (
        '<w:t>Dec</w:t></w:r>'
        '<w:r w:rsidR="004E7F2E"><w:rPr>' + FONT_I19 + '</w:rPr><w:t>ember</w:t></w:r>'
        + RUN_I19 + '<w:t xml:space="preserve"> 2019</w:t>'
    )
    rep(win_end_old,
        RUN_I19 + '<w:t>August 2020</w:t>',
        "Win Authority end: December 2019 -> August 2020")

    # 5. Motion Miracles start: Jan + uary + " 2021" -> "December 2020"
    motion_start_old = (
        '<w:t>Jan</w:t></w:r>'
        '<w:r w:rsidR="00222336"><w:rPr>' + FONT_I19 + '</w:rPr><w:t>uary</w:t></w:r>'
        + RUN_I19 + '<w:t xml:space="preserve"> 2021</w:t>'
    )
    rep(motion_start_old,
        RUN_I19 + '<w:t>December 2020</w:t>',
        "Motion Miracles start: January 2021 -> December 2020")

    # 5b. Motion Miracles end (already fixed, but cover >May 2021< pattern)
    rep('>May 2021<', '>June 2021<', "Motion Miracles end: May -> June 2021")

    # 6. Chonk revenue
    rep('SAR 30K', 'SAR 60K', "Chonk: SAR 30K -> SAR 60K")

    # 7. PMP exam date
    rep('PMP Candidate · Exam: July 2026',
        'Project Management Professional (PMP) – In Progress',
        "PMP: remove exam date")

    # 8. Rotaract
    rep('SAR 714K Funds Raised', 'SAR 18.75M Projects Managed',
        "Rotaract: SAR 714K -> SAR 18.75M")
    rep('SAR 714K', 'SAR 18.75M', "Rotaract: SAR 714K standalone")

    # 9. Swap time
    rep('15 Seconds', '90-20 seconds', "Swap time: 15 -> 90-20 sec")
    rep('15 seconds', '90-20 seconds', "Swap time lc")

    return xml, changes


def fix_docx(src_path):
    print(f"\nProcessing: {src_path.name}")
    backup = src_path.with_suffix('.docx.bak')
    shutil.copy2(src_path, backup)
    tmp = src_path.with_suffix('.tmp.docx')
    changed = False

    with zipfile.ZipFile(src_path, 'r') as zin:
        with zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename == 'word/document.xml':
                    original = data.decode('utf-8')
                    modified, log = patch_xml(original)
                    for line in log:
                        print("  " + line)
                    if modified != original:
                        changed = True
                    data = modified.encode('utf-8')
                zout.writestr(item, data)

    if changed:
        os.replace(tmp, src_path)
        print(f"  => Saved {src_path.name}")
    else:
        os.remove(tmp)
        print(f"  => No changes in {src_path.name}")
    backup.unlink()
    return changed


def main():
    # Process every DOCX in the cv directory tree, skip temp files
    docx_files = [
        p for p in CV_DIR.rglob("*.docx")
        if not p.name.startswith("~$")
    ]
    print(f"Found {len(docx_files)} DOCX files")
    for path in sorted(docx_files):
        fix_docx(path)
    print("\nDone.")


if __name__ == '__main__':
    main()
