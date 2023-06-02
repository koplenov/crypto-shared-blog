namespace $ {

	export class $blog_comment extends $hyoo_crowd_struct {

		id() {
			return this.land.id()
		}

		@$mol_mem
		text( next?: string ) {
			return this.sub( 'text', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@$mol_mem
		created_moment() {
			const ms = this.land.first_stamp() ?? 0
			return new $mol_time_moment( ms )
		}
	}
}
