# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
    email: "test1@test.com",
    password: "password",
    username: "Freshmex",
    firstname: "Justin",
    lastname: "Garcia",
    gender: "male"
)

user2 = User.create(
    email: "tes21@test.com",
    password: "password",
    username: "Gela",
    firstname: "Angela",
    lastname: "Doan",
    gender: "female"
)

user3 = User.create(
    email: "test3@test.com",
    password: "password",
    username: "Em",
    firstname: "Emery",
    lastname: "Ghrist",
    gender: "female"
)