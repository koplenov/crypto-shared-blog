namespace $.$$ {
	export class $blog extends $.$blog {
		@$mol_mem_key
		text( id: any, next?: any ) {
			return this.note( id ).sub( "text", $hyoo_crowd_reg ).str( next ) || ""
		}

		@$mol_mem_key
		current_title( id: any, next?: any ) {
			return this.note( id ).sub( "title", $hyoo_crowd_reg ).str( next ) || super.current_title( id )
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
		notes() {
			return this.yard().world().Fund( $hyoo_crowd_dict ).Item( this.root_id() )
		}

		@$mol_mem_key
		note( id: string ) {
			return this.notes().sub( id, $hyoo_crowd_dict )
		}

		@$mol_mem
		notes_view() {
			return [
				{ data: $mol_state_arg.value( "id" ) },
				...this.notes().units()
			]
			.filter(note => note.data)
			.map( note =>  this.Note( note.data ) )
		}

		@$mol_action
		add_note() {
			this.notes().add( this.yard().land_grab().id() )
		}

		@$mol_action
		share_note( id: any ) {
			return $mol_dom_context.location.href.replace( $mol_dom_context.location.hash, "" ) + `#id=${ id }/=0`
		}
	}
}
