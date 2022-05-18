import * as axios from 'axios'

module.exports.login = async (req, res) => {
  const result = await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', req.body).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.log(error)
  })
  res.status(200).json(result)
}

module.exports.logout = async (req, res) => {

}

module.exports.user = async (req, res) => {
}
