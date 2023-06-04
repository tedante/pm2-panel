import pm2 from "pm2"

// console.log(pm2);

export const list = () => {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }


    pm2.list((err, list) => {
      console.log(err, list, ">>>>>>") // return array
    })
  })
}

export const start = (processName) => {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }


    pm2.start(processName, (err, result) => {
      console.log(err, result, ">>>>>>")
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