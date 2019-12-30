let env = '' // 环境
if (process.env.NODE_ENV === 'development') {
  env = 'DEV'
} else if (process.env.NODE_ENV === 'production') {
  env = 'PRO'
} else if (process.env.NODE_ENV === 'mtestEnvironment') {
  env = 'TEST'
}

export {
  env
}
