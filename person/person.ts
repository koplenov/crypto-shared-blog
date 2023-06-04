namespace $ {

	export class $blog_person extends $hyoo_crowd_struct {

		id() {
			return this.land.id()
		}

		@$mol_mem
		posts() {
			const obj = this.sub( '$blog_posts', $blog_entity_links<typeof $blog_post> )
			obj.Item = $blog_post
			return obj
		}
	}
}
