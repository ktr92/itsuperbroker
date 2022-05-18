import * as axios from 'axios'

module.exports.login = async (req, res) => {
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', req.body).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    console.log(error)
  })
}

module.exports.logout = async (req, res) => {

}

module.exports.user = async (req, res) => {
}
