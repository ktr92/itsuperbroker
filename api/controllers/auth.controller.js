import * as axios from 'axios'

module.exports.login = async (req, res) => { 
  const sendData = { ...req.body }
  sendData.grant_type = 'password'
  console.log(sendData)
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', sendData).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    res.status(error.response.data.code).json(error.response.data)
  })
}

module.exports.refresh = async (req, res) => {
  const sendData = { ...req.body }
  sendData.grant_type = 'refresh_token'
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/refresh', sendData).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    res.status(error.response.data.code).json(error.response.data)
  })
}

module.exports.logout = async (req, res) => {

}

module.exports.user = async (req, res) => {
}
