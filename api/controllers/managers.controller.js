import * as axios from 'axios'

module.exports.fetch = async (req, res) => {
  await axios.get('https://api-broker.demo.ipotech.su/api/v1/bank/manager/list?page=1&limit=10').then(function (response) {
    res.status(200).json(response)
  }).catch(function (error) {
    res.status(error.response.status).json(error.response.statusText)
  })
}
