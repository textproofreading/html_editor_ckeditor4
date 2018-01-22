CKEditor 4
==========



<script>


<!--

	initSample();

    CKEDITOR.editorConfig = function( config ) {
	config.language = 'zh-cn';
	config.uiColor = '#F7B42C';
	config.height = 300;
	config.toolbarCanCollapse = true;



	config.font_defaultLabel = 'Arial';
	config.fontSize_defaultLabel = '16px';

};


CKEDITOR.config.font_defaultLabel = 'Arial';
CKEDITOR.config.fontSize_defaultLabel = '16px';

CKEDITOR.on( 'instanceReady', function( ev ) {
ev.editor.window.$.document.body.style.fontFamily = "Arial";
ev.editor.window.$.document.body.style.fontSize = "16px";

});

-->



<!--

			 '/',
        ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
        '/',
        ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor','Source']

			-->



</script>






Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
http://ckeditor.com - See LICENSE.md for license information.

CKEditor is a text editor to be used inside web pages. It's not a replacement
for desktop text editors like Word or OpenOffice, but a component to be used as
part of web applications and websites.

## Documentation

The full editor documentation is available online at the following address:
http://docs.ckeditor.com

## Installation

Installing CKEditor is an easy task. Just follow these simple steps:

 1. **Download** the latest version from the CKEditor website:
    http://ckeditor.com. You should have already completed this step, but be
    sure you have the very latest version.
 2. **Extract** (decompress) the downloaded file into the root of your website.

**Note:** CKEditor is by default installed in the `ckeditor` folder. You can
place the files in whichever you want though.

## Checking Your Installation

The editor comes with a few sample pages that can be used to verify that
installation proceeded properly. Take a look at the `samples` directory.

To test your installation, just call the following page at your website:

	http://<your site>/<CKEditor installation path>/samples/index.html

For example:

	http://www.example.com/ckeditor/samples/index.html
