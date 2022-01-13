import { Application, HLayout, VLayout, Label, Component,
		formatIntlDate } from './x4deps.js';

/**
 * 
 */

class MainFrame extends VLayout {

	render( ) {
		this.setContent( [
			new HLayout( {
				cls: 'header center',
				content: [
					new Label( { 
						text: 'X4 Application',
						flex: 1,
					})
				]
			}),

			new Component( { 
				flex: 1,
			} ),
			
			new HLayout( {
				cls: 'footer center',
				ref: 'statusbar',
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

		this.startTimer( 'time', 30000, true, ( ) => this._updateTime( ) );
		this._updateTime( );
	}

	private _updateTime( ) {
		let footer = this.itemWithRef( 'statusbar' );
		footer.itemWithRef<Label>( 'time' ).text = formatIntlDate( new Date(), 'd o H:I' );
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


