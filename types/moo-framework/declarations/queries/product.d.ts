/**
 * Representa um produto.
 */
interface Product
{
	/** Identificador do produto. */
	id: string
	/** Slug do produto. */
	slug:string
	/** URL do produto. */
	url:string
	/** Título principal. */
	title: string
	/** Título completo. */
	fullTitle: string
	/** Descrição. */
	description: string
	/** Descrição curta. */
	shortDescription: string
	/** Descrição da garantia. */
	warrantyDescription: string
	/** Peso. */
	weight: number
	/** Largura. */
	width: number
	/** Altura. */
	height: number
	/** Comprimento. */
	length: number
	/** Path do produto. */
	path: string
	/** Rating com informações da avaliação. */
	rating: Rating
	/** Picture da foto de listagem do produto. */
	picture: Picture
	/** Coleção de ProductCategory com informações das categorias. */
	categories: ProductCategory[]
	/** Coleção de ProductSpecification com informações dos atributos. */
	attributes: ProductSpecification[]
	/** Coleção de ProductVariant com informações das variações. */
	variants: ProductVariant[]
	/** Coleção de ProductVariantTreeItem com informações das variações organizadas em árvore. */
	variantsTree: ProductVariantTreeItem[]
}

/**
 * Representa uma categoria no Product.
 */
interface ProductCategory
{
	/** Texto de exibição. */
	text: string
	/** Identificador do valor da categoria. */
	value: number
	/** Categorias filhas. Coleção de ProductCategory. */
	children: ProductCategory[]
}

/**
 * Representa um filtro ou categoria para refinar registros do catálogo de produtos.
 */
interface ProductFacet
{
	/** Texto de exibição. */
	text: string
	/** Identificador do valor do facet. */
	value: number
	/** Descrição. */
	description: string
	/** Hexadecimal do icone da cor. */
	iconHexColor: string //NOTE: Verificar se não é um número.
	/** URL do icone. */
	iconUrl: string
	/** Quantidade de itens encontrados no filtro atual. */
	count: number
	/** URL do facet. */
	url: string
	/** Tipo de facet. */
	type: string
	/** Facetos filhos. */
	children: ProductFacet[]
}

/**
 * Representa o fabricante de um Product.
 */
interface ProductManufacturer
{
	/** Código de referência. */
	reference: string
	/** Modelo. */
	model: string
}

/**
 * Representa o preço do produto.
 */
interface ProductPrice
{
	/** Preço do produto. Preço do produto. */
	price: number
	/** Preço antigo do produto. */
	oldPrice: number
	/** Determina se o preço é diferente entre as variações existentes. */
	varies: boolean
}

/**
 * Representa o estoque do produto.
 */
interface ProductStock
{
	/** Quantidade em estoque. */
	quantity: number
	/** Determina se produto possui ou não estoque. */
	hasStock: boolean
}

/**
 * Representa uma especificação de produto.
 */
interface ProductSpecification
{
	/** Texto de exibição. */
	text: string
	/** Identificador do valor da specification. */
	value: number
	/** Descrição. */
	description: string
	/** Código hexadecimal do icone. */
	iconHexColor: string
	/** URL do ícone. */
	iconUrl: string
	/**  Especificações filhas. Retorna uma coleção de ProductSpecification. */
	children: ProductSpecification
}

/**
 * Representa uma variação do produto.
 */
interface ProductVariant
{
	/** Identificador da variação. */
	id: string
	/** Path da variação. */
	path: string
	/** Código sku do produto. */
	sku: string
	/** Data de lançamento. */
	releaseDate: string
	/** Quantidade de vendas. */
	salesAmount: number
	/** Informações do fabricante. */
	manufacturer: ProductManufacturer
	/** Fotos da varição. */
	pictures: Picture[]
	/** Especificação da varição. */
	options: ProductVariantSpecification[]
}

/**
 * Representa um item de variação do produto organizado em árvore.
 */
interface ProductVariantTreeItem
{
	/** Caminho da variação. */
	path:string
	/** Especificação da varição. Retorna ProductVariantSpecification. */
	option: ProductVariantSpecification
	/** Variações filhas. */
	children: ProductVariantTreeItem[]
}

/**
 * Representa uma especificação da variação do produto. Similar à ProductSpecification, porém trás a estrutura aninhada em somente um nível.
 */
interface ProductVariantSpecification
{
	/** Texto de exibição. */
	text:string
	/** Identificador do valor da specification. */
	value: string
	/** Texto de exibição da specification pai. */
	parentText: string
	/** Identificador do valor da specification pai. */
	parentValue: string
	/** Descrição. */
	description: string
	/** Código hexadecimal do icone. */
	iconHexColor: string //NOTE: Verificar se não é número
	/** URL do ícone. */
	iconUrl: string
}