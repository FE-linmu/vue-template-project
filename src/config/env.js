let env = '' // 环境
if (process.env.VUE_APP_CURRENTMODE === 'development') {
  env = 'DEV'
} else if (process.env.VUE_APP_CURRENTMODE === 'production') {
  env = 'PRO'
} else if (process.env.VUE_APP_CURRENTMODE === 'test') {
  env = 'TEST'
}

export {
  env
}
