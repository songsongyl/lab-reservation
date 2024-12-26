import { $http } from './index.ts';
export const loginApi = (data) => {
    return $http({
        method: 'POST',
        url: '/login',
        data
    })
}