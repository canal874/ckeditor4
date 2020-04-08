@bender-tags: bug, 3940, 4.15.0
@bender-ui: collapsed
@bender-ckeditor-plugins: wysiwygarea, toolbar, colorbutton, colordialog, sourcearea

1. Select first word.
1. Press on text color button.
1. Hover over red square.

	### Expected:

	Tooltip displays: `text-red`

1. Press red square.
1. Press show source button.

### Expected:

Selected text should have class `text-red`.


### Unexpected:

Selected text doesn't have class `text-red`.
