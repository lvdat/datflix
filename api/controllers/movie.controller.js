import Movie from '../models/Movie.model.js'
import Country from '../models/Country.model.js'
import Episode from '../models/Episode.model.js'

export const getAllMovie = async(req, res) => {
    try {
        const movies = await Movie.find().populate('genres').populate('country').exec()
        if (!movies || movies.length === 0) {
            return res.status(404).send({
                message: "Chưa có phim nào :("
            })
        }
        return res.status(200).send(movies)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}

export const getMovieById = async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).exec()
        if (!movie || movie.length === 0) {
            return res.status(404).send({
                message: "Không tìm thấy phim này :("
            })
        }
        return res.status(200).send(movie)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}

export const createMovie = async(req, res) => {
    try {
        const movie = await Movie.create({
            title: req.body.title,
            description: req.body.description,
            year: req.body.year,
            genres: req.body.genres,
            director: req.body.director,
            duration: req.body.duration,
            thumbnail: req.body.thumbnail,
            country: req.body.country,
        })
        if (movie) {
            return res.status(200).send({
                message: "Success",
                id: movie._id
            })
        }
        return res.status(400).send({
            message: "Failed",
        })
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error.",
            error: err.message
        })
    }
}

export const deleteMovie = async(req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id).exec()
        if (movie) {
            return res.status(200).send({
                message: "Success",
            })
        }
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error.",
            error: err.message
        })
    }
}

export const getEpisodeById = async(req, res) => {
    try {
        const episode = await Episode.findById(req.params.id).exec()
        if (!episode || episode.length === 0) {
            return res.status(404).send({
                message: "Không tìm thấy tập phim này :("
            })
        }
        return res.status(200).send(episode)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}