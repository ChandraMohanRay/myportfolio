const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "rapping",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "React.js",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "javaScript",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "Html(5)",
				weight: 12
			}, {
				text: "Angular.js",
				weight: 7
			},
			{
				text: "<?php",
				weight: 7
			},
			{
				text: "Sql",
				weight: 10
			},
			{
				text: "Node.js",
				weight: 7
			},
			{
				text: "Webstorm",
				weight: 6
			},
			{
				text: "GitHub",
				weight: 4
			},
			{
				text: "Bootstrap",
				weight: 11
			},
			{
				text: "API || AJAX",
				weight: 12
			}
			
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Front-End Web Developer.", "love everything about code.", "I also do freelancing.", "solve complex  problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
