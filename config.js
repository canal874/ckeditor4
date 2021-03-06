/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.enterMode = 2;
	config.shiftEnterMode = 1;
	config.allowedContent = true;
	
	config.contentsCss = './css/ckeditor-rxdesktop-contents.css?20200609';

  config.colorButton_colors = 'FFD700,DC143C,008000,0000CD,FF8C00,800080,FFF8D0,FFCAC4,EDFFC4,D1E1FF,FFDD9E,F8D0FF,BFBA9D,BF9893,B2BF93,9DA9BF,BFA677,BA9DBF,E0E0E0,C0C0C0,A0A0A0,505050,000000,ffffff';

  config.colorButton_enableMore = false;
  
	config.toolbar = [
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'BulletedList', 'FontSize', 'TextColor', 'BGColor' ] }
	];

	config.plugins =
//		'about,' +
//		'a11yhelp,' +
//    'autoembed,' + 
		'autolink,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
//		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
//		'copyformatting,' +
//		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
//		'elementspath,' +
//    'embed,' +
//    'embedbase,' +  
		'enterkey,' +
		'entities,' +
//		'emoji,' + 
//		'filebrowser,' +
		'find,' +
//		'flash,' +
		'floatingspace,' +
		'font,' +
//		'format,' +
//		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
//		'image,' +
		'image2,' +
//		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
//		'liststyle,' +  // NOTE: If uncomment this line, context menu of CKEditor is shown by right clicking.
		'magicline,' +
//		'maximize,' +
//		'newpage,' +
//		'pagebreak,' +
//		'pastefromgdocs,' +
//		'pastefromlibreoffice,' +
//		'pastefromword,' +
//		'pastetext,' +
//		'preview,' +
//		'print,' +
//		'removeformat,' +
//		'resize,' +
//		'save,' +
//		'selectall,' +
//		'showblocks,' +
		'showborders,' +
//		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
//		'stylescombo,' +
		'tab,' +
		'table,' +
//		'tableselection,' +
//		'tabletools,' +
//		'templates,' +
		'toolbar,' +
		'undo,' +
//		'uploadimage,' +
		'wysiwygarea';

	config.toolbarLocation = 'bottom';
	config.fontSize_defaultLabel = '14';
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
