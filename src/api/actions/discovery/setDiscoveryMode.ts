const defaultConfig = {
    autoPeering: true
}

export const setDiscoveryMode = (config?:object) => {
    config = config || defaultConfig;
    localStorage.setItem('discovery', JSON.stringify(config))
}