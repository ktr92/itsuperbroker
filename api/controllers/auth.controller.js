import * as axios from 'axios'

module.exports.login = async (req, res) => {
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', req.body).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    res.status(error.response.data.code).json(error.response.data)
  })
}

module.exports.refresh = async (req, res) => {
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', req.body).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    res.status(error.response.data.code).json(error.response.data)
  })
}

module.exports.logout = async (req, res) => {

}

module.exports.user = async (req, res) => {
}
