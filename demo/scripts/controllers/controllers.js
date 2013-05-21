'use strict';

angular.module('angularDemoApp')

    /**************************************************************************************/
    /**                                    MainCtr                                        */
    /**************************************************************************************/

    .controller('MainCtrl', function ($rootScope, $scope, $location, User, $cookies) {

        if($cookies.user && $cookies.tweets){
            $rootScope.user = angular.fromJson($cookies.user);
        }else{
            User.get({screen_name: 'RobinComa'}, function(user){
                $cookies.user = JSON.stringify(user);
            });
            $cookies.tweets = JSON.stringify({
                results : []
            });
        }

        $rootScope.submitSearch = function(){
            $location.path('search/' + this.q);
        };
    })

    /**************************************************************************************/
    /**                                    TweetsCtrl                                     */
    /**************************************************************************************/

    .controller('TweetsCtrl', function ($scope, $cookies) {
        $scope.tweets = angular.fromJson($cookies.tweets);
    })

    /**************************************************************************************/
    /**                                    SearchCtrl                                     */
    /**************************************************************************************/

    .controller('SearchCtrl', function ($scope, $routeParams, Tweet) {
        $scope.tweets = Tweet.query({q: $routeParams.q});
    })

    /**************************************************************************************/
    /**                                    SubmitTweet                                    */
    /**************************************************************************************/

    .controller('SubmitTweet', function ($rootScope, $scope, $location, $cookies) {
        $scope.submitTweet = function(){
            if($scope.readyToSubmit){
                var tweets = angular.fromJson($cookies.tweets);
                tweets.results.unshift({
                    created_at : (new Date()).getTime(),
                    from_user : $rootScope.user.screen_name,
                    from_user_name : $rootScope.user.name,
                    profile_image_url : $rootScope.user.profile_image_url,
                    text : $scope.tweetText
                });
                $cookies.tweets = JSON.stringify(tweets);
                $scope.tweetText = '';
                $location.path('tweets/');
            }
        };

        $scope.$watch('tweetText', function() {
            $scope.readyToSubmit = $scope.tweetText.length > 0 && 140 - $scope.tweetText.length >= 0;
        });
    })

    /**************************************************************************************/
    /**                                    ProfileCtrl                                    */
    /**************************************************************************************/

    .controller('ProfileCtrl', function ($scope, $routeParams, User) {
        $scope.user = User.get({screen_name: $routeParams.screen_name}, function (user) {
            var banner = 'https://abs.twimg.com/a/1368055129/t1/img/grey_header_web.png';
            if(user.profile_banner_url){
                banner = user.profile_banner_url + '/web';
            }
            $scope.backgroundImage = 'url(' + banner +')';
        });
    })

;
