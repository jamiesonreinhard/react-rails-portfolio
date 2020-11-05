10.times do
  Project.create(
    name: Faker::Games::Witcher.monster,
    description: Faker::Movies::HarryPotter.quote,
    url: 'www.project.com',
    github_url: 'www.github.com',
    user: User.first
  )
end