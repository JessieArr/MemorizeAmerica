angular.module('MemorizeAmerica', [], function () {
}).controller('ConstitutionCtrl', function ($scope) {
    $scope.test = 'Test!!';
    $scope.currentQuestion = 1;
    $scope.totalQuestions = 27;
    $scope.StartQuiz = function() {
        $scope.quizStarted = true;
        $scope.questionText = 'Which amendment to the U.S. Constitution reads as follows? "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."';

        $scope.options = [
            { text: 'Amendment V' },
            { text: 'Amendment IV' },
            { text: 'Amendment I' },
            { text: 'Amendment III' },
            { text: 'Amendment IX' }
        ];

        $scope.SubmitAnswer = function() {
            var radioButtons = document.getElementsByName('answers');

            var selectedAnswer = -1;
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    selectedAnswer = i;
                }
            }

            if (selectedAnswer == 2) {
                $scope.rightAnswer = true;
                $scope.wrongAnswer = false;
            } else {
                $scope.rightAnswer = false;
                $scope.wrongAnswer = true;
            }

            $scope.moreInfoURL = 'https://en.wikipedia.org/wiki/First_Amendment_to_the_United_States_Constitution';

            $scope.submitted = true;
        }
    }
});
