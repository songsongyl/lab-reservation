var sqlMap = {
    user: {
        add: 'insert into user (username, password,telephone) values (?,?,?)',
        select: 'select * from user'
    }
}


module.exports = sqlMap;