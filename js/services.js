angular.module('starter.services', ['ngCookies'])
.factory('Auth', function ($cookieStore) {
   var _user = $cookieStore.get('starter.user');
   var setUser = function (user) {
      _user = user;
      $cookieStore.put('starter.user', _user);
   }

   return {
      setUser: setUser,
      isLoggedIn: function () {
         return _user ? true : false;
      },
      getUser: function () {
         return _user;
      },
      logout: function () {
         $cookieStore.remove('starter.user');
         _user = null;
      }
   }
});