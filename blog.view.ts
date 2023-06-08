namespace $.$$ {
	export class $blog extends $.$blog {

		@$mol_mem_key
		Input( id: any ) {
			let obj

			if( this.i_can_mod( id ) ) {
				obj = new this.$.$mol_textarea()
				obj.value = ( next?: any ) => this.text( id, next )
			}
			else {
				obj = new this.$.$mol_text()
				obj.text = () => this.text( id )
			}

			obj.minimal_height = () => 250
			return obj
		}

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
		i_can_mod( post: $blog_post ) {
			return post.land.allowed_mod()
		}

		@$mol_mem
		spreads() {
			return this.user().posts().items().reduce( ( dict, post ) => {
				dict[ post.id() ] = this.Note( post )
				return dict
			}, {} as any )
		}

		@$mol_mem
		Spread() {
			return ( super.Spread() ?? this.spread() !== "" ? this.Note( this.user().posts().item( this.spread() as $mol_int62_string ) ) : undefined ) as any
		}

		@$mol_action
		add_note() {
			this.user().posts().item_make()
		}

		share_note( post: $blog_post ) {
			return $mol_state_arg.make_link( { [ this.param() ]: post.id() } )
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
