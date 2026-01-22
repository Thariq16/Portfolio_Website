export const getAssetPath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    // Remove leading slash if both basePath has trailing slash (unlikely) and path has leading slash to avoid double slash
    // But usually basePath is "/repo" and path is "/img.png".
    // Best to just concatenate.
    return `${basePath}${path}`;
};
