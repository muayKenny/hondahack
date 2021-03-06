(function () {
    'use strict'

    angular.module('client.services')
        .factory('friendService', FriendServiceFactory)
    FriendServiceFactory.$inject = ['$http', '$q']

    function FriendServiceFactory($http, $q) {
        return {
            readAll: readAll,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            let friendsArray = [
                {
                    name: "Ed",
                    profilePic: "https://uploads.haystak.com/Production_Templates/Images/2016/Honda/16hondacivic/2016_HondaCivic_AngularFront.png",
                    id: 1,
                    coords: {
                        latitude: 34.0413606,
                        longitude: -118.2697771
                    },
                    options: {
                        labelClass: 'marker_labels',
                        labelAnchor: '12 60',
                        labelContent: 'Ed',
                    },
                },
                {
                    name: "Cory",
                    profilePic: "http://st.motortrend.com/uploads/sites/10/2015/11/2013-honda-odyssey-ex-minivan-angular-front.png",
                    id: 2,
                    coords: {
                        latitude: 34.0039,
                        longitude: -118.2301
                    },
                    options: {
                        labelClass: 'marker_labels',
                        labelAnchor: '12 60',
                        labelContent: 'Cory',
                    }
                },
                {
                    name: "Betty",
                    profilePic: "https://shinglespringshonda.com/media/inventory/2018-honda-fit-lx-lunar-silver-metallic-3HGGK5G43JM703882-1.jpg",
                    id: Date.now(),
                    coords: {
                        latitude: 33.9617,
                        longitude: -118.3531
                    },
                    options: {
                        labelClass: 'marker_labels',
                        labelAnchor: '12 60',
                        labelContent: 'betty',
                    }
                }
            ]

            return $q.resolve(friendsArray)
                .catch(onError)
       
        }

        function readById(id) {
            return $http.get(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function create(hackerData) {
            return $http.post('/api/hackers', hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(hackerData) {
            return $http.put(`/api/hackers/${hackerData._id}`, hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()