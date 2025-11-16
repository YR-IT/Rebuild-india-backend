import mongoose from 'mongoose'

const NewsCarouselSchema = new mongoose.Schema(
	{
		headline: {type: String, required: true, trim: true},
		image: {type: String, required: true},
		isActive: {type: Boolean, default: true},
	},
	{timestamps: true}
)

export default mongoose.model('NewsCarousel', NewsCarouselSchema)
