import { Application, HLayout, VLayout, Label, Component,
		formatIntlDate } from './x4deps.js';

/**
 * 
 */

class MainFrame extends VLayout {

	private m_header: HLayout;
	private m_content: HLayout;
	private m_footer: HLayout;
	
	render( ) {
		let f, h, c;

		this.setContent( [
			h = new HLayout( {
				cls: 'header center',
				content: [
					new Label( { 
						text: 'X4 Application',
						flex: 1,
					})
				]
			}),

			c = new Component( { 
				flex: 1,
			} ),
			
			f = new HLayout( {
				cls: 'footer center',
				content: [
					new Label( { 
						text: '',
						flex: 1,
					}),
					new Label( { 
						ref: 'time',
						text: '',
					})
				]
			})
		] );

		this.m_header = h;
		this.m_content = c;
		this.m_footer = f;

		this.startTimer( 'time', 30000, true, ( ) => this._updateTime( ) );
		this._updateTime( );
	}

	private _updateTime( ) {
		this.m_footer.itemWithRef<Label>( 'time' ).text = formatIntlDate( new Date(), 'd o H:I' );
	}
}

/**
 * 
 */

class DemoApp extends Application {
	constructor( ) {
		super( {
			app_name: 'Demo App',
			app_version: '1.0',
			app_uid: 'demo-01.x4.com',
			locale: 'fr-fr'
		});
	}
}


const myApp = new DemoApp( );
myApp.mainView = new MainFrame( {} );


