module.exports = m9config => {
  const config = {
    default: {
      disallow_robots: true,
      site_url: '/'
    },
    production: {
      disallow_robots: false,
    }
  }

  return {
    ...m9config,
    ...config.default,
    ...config[m9config.stage]
  }
}