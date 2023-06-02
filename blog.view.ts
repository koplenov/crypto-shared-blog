namespace $.$$ {
	export class $blog extends $.$blog {

		@$mol_mem
		home() {
			return this.yard().world().home()
		}

		@$mol_mem
		user() {
			return this.home().chief.as( $blog_person )
		}

		// post 
		@$mol_mem_key
		text( post: $blog_post, next?: any ) {
			return post.text( next ) || ""
		}

		@$mol_mem_key
		current_title( post: $blog_post, next?: string ) {
			return post.title( next ) || super.current_title( post )
		}

		@$mol_mem_key
		i_can_mod( id: $mol_int62_string ) {
			return this.yard().land( id ).allowed_mod()
		}

		@$mol_mem
		root_id() {
			const key = "root_id"
			let id = $mol_state_local.value( key )
			if( id === null )
				id = $mol_state_local.value( key, this.yard().land_grab().id() )
			return id as $mol_int62_string
		}

		@$mol_mem
		spreads() {
			return this.user().posts().items().map(post => this.Note(post))

			return this.user().posts().items().reduce( ( dict, post ) => {
				dict[ post.id() ] = this.Note( post )
				return dict
			}, {} as any )
		}

		Spread() {
			return this.spreads()[ this.spread() ]
				|| this.yard().world().Fund( $blog_post ).Item( this.spread() as $mol_int62_string )
		}

		@$mol_action
		add_note() {
			this.user().posts().item_make()
		}

		share_note( post: $blog_post ) {
			return $mol_state_arg.make_link( { [this.param()]: post.id() } )
		}

		@$mol_mem
		seed_id( id?: any ) {
			return id
		}

		// comments
		@$mol_mem_key
		comment_rows( post: $blog_post ) {
			return [
				...post.comments().items().map( obj => this.Comment( obj ) ),
				this.Comment_add( post ),
			]
		}

		comment_text( comment: $blog_comment ) {
			return comment.text()
		}

		comment_created_moment( comment: $blog_comment ) {
			return comment.created_moment()
		}

		@$mol_action
		comment_add( post: $blog_post ) {
			post.comment_add( this.comment() )
			this.comment( "" )
		}
	}
}
