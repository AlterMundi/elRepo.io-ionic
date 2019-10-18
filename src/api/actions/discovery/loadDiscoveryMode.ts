const defaultConfig = {
    autoPeering: true
}

export const loadDiscoveryMode = () => {
    try {
        const rawConfig = localStorage.getItem('discovery')
        if (rawConfig) {
            const config = JSON.parse(rawConfig)
            return config
        }
        return defaultConfig
    } catch {
        return defaultConfig
    }
}