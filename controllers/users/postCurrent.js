
const postCurrent = async (req, res) => {
    console.log(req.user)
    const {email, subscription} = req.user

    res.status(200).json({
        email,
        subscription,
    })
}

module.exports = postCurrent