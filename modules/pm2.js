import pm2 from "pm2"

// console.log(pm2);
export const connection = () => {
  return new Promise((resolve, reject) => {
    pm2.connect((err, result) => {
      if (err) {
        process.exit(2)

        reject(err)
      }

      resolve(result)
    })
  })
}

export const list = () => {
  return new Promise((resolve, reject) => {
    pm2.list((err, result) => {
      if (err) {
        process.exit(2)

        reject(err)
      }

      resolve(result)
    })
  })
}

export const start = (processName) => {
  return new Promise((resolve, reject) => {
    pm2.start(processName, (err, result) => {
      if (err) {
        process.exit(2)

        reject(err)
      }

      resolve(result)
    })
  })
}

export const stop = (processName) => {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }


    pm2.stop(processName, (err, result) => {
      console.log(err, result, ">>>>>>")
    })
  })
}

export const restart = (processName) => {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }

    pm2.restart(processName, (err, result) => {
      console.log(err, result, ">>>>>>")
    })
  })
}

export const remove = (processName) => {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }

    pm2.delete(processName, (err, result) => {
      console.log(err, result, ">>>>>>")
    })
  })
}