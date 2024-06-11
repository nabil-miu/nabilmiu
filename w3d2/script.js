$(function () {
    $('#start').on('click', function () {
        const radius = parseInt($('#width').val());
        const growthAmount = parseInt($('#growthAmount').val());
        const interval = parseInt($('#interval').val());
        const numberCircles = parseInt($('#numberCircles').val());
        const listOfColors = generateRandomColors(numberCircles);
        const container = $('#circle-container');

        container.empty();

        for (let i = 0; i < numberCircles; i++) {
            const circleColor = listOfColors[Math.floor(Math.random() * listOfColors.length)];
            const circle = $('<div>', {
                class: 'circle',
                css: {
                    width: radius,
                    height: radius,
                    backgroundColor: circleColor,
                    left: Math.random() * (container.width() - radius),
                    top: Math.random() * (container.height() - radius)
                }
            }).appendTo(container);

            addGrowFunctionality(circle, radius, growthAmount, interval);

            addCircleEvents(circle);
        }

        function addGrowFunctionality(circle, width, growthAmount, interval) {
            let radius = width;
            const grow = setInterval(function () {
                radius += growthAmount;
                circle.css({
                    width: radius,
                    height: radius
                });
            }, interval);
        }

        function addCircleEvents(circle) {
            circle.on('click', function () {
                circle.remove();
            });

            circle.on('mouseenter', function () {
                circle.css('opacity', 0.5);
            })
            circle.on('mouseleave', function () {
                circle.css('opacity', 1);
            });
        }

        //Source: https://stackoverflow.com/questions/1484506/random-color-generator
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function generateRandomColors(numColors) {
            const colors = [];
            for (let i = 0; i < numColors; i++) {
                colors.push(getRandomColor());
            }
            return colors;
        }

    });
});
