/**
 * Representa um banner.
 */
interface Banner
{
	/** Título do banner. */
	title: string
	/** Coleção de `BannerImage` */
	images: BannerImage[]
}

/**
 * Representa cada imagem de um banner.
 */
interface BannerImage
{
	/** URL da imagem, um link para o arquivo. */
	url: string
	/** Link da imagem, para onde ela deve apontar. */
	target: string
}