namespace $ {

	export class $blog_post extends $hyoo_crowd_struct {
		id() {
			return this.land.id()
		}

		@$mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@$mol_mem
		text( next?: string ) {
			return this.sub( 'text', $hyoo_crowd_text ).text( next ) ?? ''
		}

		@$mol_mem
		comments() {
			const obj = this.yoke( 'comments', $blog_entity_links<typeof $blog_comment>, [], [], [ '0_0' ] )!
			obj.Item = $blog_comment
			return obj
		}

		comment_add( text: string ) {
			this.comments().item_make().text( text )
		}

		@ $mol_mem
		created_moment() {
			const ms = this.land.first_stamp() ?? 0
			return new $mol_time_moment( ms )
		}
	}
}
