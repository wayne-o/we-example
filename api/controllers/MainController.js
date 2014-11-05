/**
 * MainController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {
  index: function (req, res) {
    // index / homepage
    return res.view('home/index');
  }
}
