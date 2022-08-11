# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
mexico_hotels = [
  {
    name: 'Holiday Inn Express Cabo San Lucas',
    desc: 'holiday-inn-express',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/cabo-san-lucas/sjdsl/hoteldetail'

  },
  {
    name: 'Holiday Inn Express Veracruz Boca del Rio',
    desc: 'holiday-inn-express',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/boca-del-rio/verpp/hoteldetail'

  },
  {
    name: 'Holiday Inn Veracruz Boca del Rio',
    desc: 'holiday-inn',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/boca-del-rio/vcrmx/hoteldetail'

  },
  {
    name: 'Hotel Indigo Veracruz Boca Del Rio',
    desc: 'hotel-indigo',
    category: 'hotel',
    website: 'https://www.ihg.com/hotelindigo/hotels/us/en/boca-del-rio/verin/hoteldetail'

  },
  {
    name: 'Holiday Inn Veracruz Centro Historico',
    desc: 'holiday-inn',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/veracruz/vcrdt/hoteldetail'

  },
  {
    name: 'Holiday Inn Express & Suites Celaya',
    desc: 'holiday-inn-express',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/celaya/bjxce/hoteldetail'

  },
  {
    name: 'Candlewood Suites Celaya',
    desc: 'candlewood-suites',
    category: 'hotel',
    website: 'https://www.ihg.com/candlewood/hotels/us/en/celaya/bjxca/hoteldetail'

  },
  {
    name: 'Holiday Inn Express & Suites Queretaro ',
    desc: 'holiday-inn-express',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/queretaro/mqerg/hoteldetail'

  },
  {
    name: 'Holiday Inn Queretaro-Centro Historico',
    desc: 'holiday-inn',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqemx/hoteldetail'

  },
  {
    name: 'Holiday Inn Queretaro Zona Krystal',
    desc: 'holiday-inn',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqebc/hoteldetail'

  },
  {
    name: 'Holiday Inn Queretaro Zona Diamante',
    desc: 'holiday-inn',
    category: 'hotel',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqeap/hoteldetail'

  },
  {
    name: 'Crowne Plaza Queretaro',
    desc: 'crowne-plaza',
    category: 'hotel',
    website: 'https://www.ihg.com/crowneplaza/hotels/us/en/queretaro/mqecc/hoteldetail'

  },
  {
    name: 'Staybridge Suites Queretaro',
    desc: 'staybridge-suites',
    category: 'hotel',
    website: 'https://www.ihg.com/staybridge/hotels/us/en/queretaro/mqesb/hoteldetail'

  },
  {
    name: 'Candlewood Suites Queretaro Juriquilla',
    desc: 'candlewood-suites',
    category: 'hotel',
    website: 'https://www.ihg.com/candlewood/hotels/us/en/juriquilla/qroja/hoteldetail'

  },
  {
    name: 'Mr & Mrs Smith Casa No Name',
    desc: 'mr-and-mrs-smith',
    category: 'hotel',
    website: 'https://www.ihg.com/mrandmrssmith/hotels/us/en/san-miguel-de-allende/bjxsd/hoteldetail'

  }
]
mexico_addresses = [
  {
    street1: 'Corredor Csl - SJD KM. 4.5',
    street2: 'Col. El Tezal',
    city: 'Cabo San Lucas',
    zipcode: '23454',
    country: 'Mexico', latitude: 22.902735,
    longitude: -109.884096
  },
  {
    street1: 'Blvd. Adolfo Ruiz Cortines :4298 A',
    street2: 'Fracc. Costa De Oro',
    city: 'Boca Del Rio',
    zipcode: '94299',
    state: 'Veracruz',
    country: 'Mexico', latitude: 19.141682,
    longitude: -96.10317

  },
  {
    street1: 'Blvd. Adolfo Ruiz Cortinez : 4298',
    street2: 'Fracc. Costa De Oro',
    city: 'Boca Del Rio',
    zipcode: '94299',
    state: 'Veracruz',
    country: 'Mexico', latitude: 19.141812,
    longitude: -96.10334
  },
  {
    street1: 'BLVD. ADOLFO RUIZ CORTINES :3533',
    street2: 'FRACC. LAS AMERICAS',
    city: 'BOCA DEL RIO',
    zipcode: '94298',
    state: 'Veracruz',
    country: 'Mexico', latitude: 19.142938,
    longitude: -96.104236
  },
  {
    street1: 'Calle Morelos 225',
    street2: 'Col. Centro',
    city: 'Veracruz',
    zipcode: '91700',
    state: 'Veracruz',
    country: 'Mexico', latitude: 19.201983,
    longitude: -96.138893
  },
  {
    street1: 'Eje Nor-Oriente Luis Donaldo Colosio 285',
    street2: 'Col. Las Delicias',
    city: 'Celaya',
    zipcode: '38080',
    state: 'Guanajuato',
    country: 'Mexico', latitude: 20.51677,
    longitude: -100.779269
  },
  {
    street1: 'Av. Eje Nor-Oriente 215, Manzana 177',
    street2: 'Casi esq. con Ribera del Campestre', city: 'Celaya', zipcode:  '38080',
    state: 'Guanajuato',
    country: 'Mexico', latitude: 20.5238618,
    longitude: -100.7781506
  },
  {
    street1: 'Av.5 De Febrero: 110 Bis', street2: 'Col. Ninos Heroes', zipcode: '76010',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.583446,
    longitude: -100.408538
  },
  {
    street1: 'Av.5 De Febrero : 110', street2: 'Col. Ninos Heroes', zipcode: '76010',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.584956,
    longitude: -100.409774
  },
  {
    street1: 'KM. 11', street2: 'Carretera Queretaro-San Luis Potosi',
    zipcode: '76100',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.66294,
    longitude: -100.431745
  },
  {
    street1: 'Anillo Vial II',
    street2: 'Fray Junipero Serra : 1500 - A', zipcode: '76140',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.620439,
    longitude: -100.38394
  },
  {
    street1: 'ANILLO VIAL II',
    street2: 'FRAY JUNIPERO SERRA : 1500', zipcode: '76140',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.619217,
    longitude: -100.383278
  },
  {
    street1: 'Carreta San Luis-Queretaro 10685',
    street2: 'Col. El Salitre Junto A Jurica',
    zipcode: '76127',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.662674,
    longitude: -100.433165
  },
  {
    street1: 'Santa Teresa 502 Int. A',
    street2: 'Fracc. Residencial Juriquilla Santa Fe',
    zipcode: '76226',
    city: 'Queretaro',
    state: 'Queretaro',
    country: 'Mexico', latitude: 20.691609,
    longitude: -100.445619
  },
  {
    street1: 'No. 52 Hernandez Macia',
    zipcode: '37700',
    city: 'San Miguel de Allende',
    state: 'Guanajuato',
    country: 'Mexico', latitude: 20.9163139,
    longitude: -100.7451721
  }
]

puts 'Cleaning up'
Address.destroy_all
Address.reset_pk_sequence
Destination.destroy_all
Destination.reset_pk_sequence
Favorite.destroy_all
Favorite.reset_pk_sequence
Speedtest.destroy_all
Speedtest.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence
Visit.destroy_all
Visit.reset_pk_sequence

puts 'Creating users'
5.times do
  addr = Faker::Address.unique
  Address.create(
    label: 'home',
    street1: addr.street_address,
    city: addr.city_prefix + addr.city_suffix,
    state: addr.state_abbr,
    country: addr.country,
    zipcode: addr.zip,
    latitude: addr.latitude,
    longitude: addr.longitude
  )
  user = Faker::Name.unique
  firstname = user.first_name
  lastname = user.last_name

  User.create(
    firstname: firstname,
    lastname: lastname,
    username: firstname[0] + lastname,
    email: Faker::Internet.email(name: firstname[0] + lastname),
    bio: Faker::Quote.jack_handey,
    admin: false,
    image: 'https://source.unsplash.com/1600x900?portrait',
    address: Address.last
  )
end

puts 'Creating hotel destinations'
mexico_hotels.each_with_index do |dest, index|
  Destination.create(category: dest[:category],
                     name: dest[:name],
                     desc: dest[:desc],
                     website: dest[:website],
                     address: Address.create(mexico_addresses[index]))
end

puts 'Creating visits'
connection_types = %w[wifi cellular ethernet]
cellular_providers = %w[sprint att verizon]
test_providers = %w[speedtest speedcheck]
User.all.each do |user|
  puts 'Setting up user ' + user.username + ' visits'
  rand(5..10).times do
    startdate = Faker::Date.backward(days: 365)
    connectiontype = connection_types.sample
    connectionprovider = connectiontype == 'cellular' ? cellular_providers.sample : nil

    speedtest_result = {
      latency: rand(5..70),
      download: rand(45..170),
      upload: rand(15..80),
      connectiontype: connectiontype,
      connectionprovider: connectionprovider,
      testprovider: test_providers.sample,
      resulturl: Faker::Internet.url,
      resultimage: 'https://source.unsplash.com/random/800x800/?img=1'
    }
    Visit.create(
      start: startdate,
      end: Faker::Date.between(from: startdate, to: Date.today),
      user: user,
      destination_id: Destination.ids.sample,
      desc: Faker::GreekPhilosophers.quote,
      tech_rating: rand(1..5),
      tech_comment: 'tech comment',
      visit_rating: rand(1..5),
      visit_comment: 'visit comment',
      speedtest: Speedtest.create(speedtest_result)
    )
    rand(5..10).times do
      startdate = Faker::Date.backward(days: 365)
      connectiontype = 'cellular'
      connectionprovider = cellular_providers.sample

      cellular_speedtest_result = {
        latency: rand(5..70),
        download: rand(45..170),
        upload: rand(15..80),
        connectiontype: connectiontype,
        connectionprovider: connectionprovider,
        testprovider: test_providers.sample,
        resulturl: Faker::Internet.url,
        resultimage: 'https://source.unsplash.com/random/800x800/?img=1'
      }
      Visit.create(
        start: startdate,
        end: Faker::Date.between(from: startdate, to: Date.today),
        user: user,
        destination_id: Destination.ids.sample,
        desc: Faker::GreekPhilosophers.quote,
        tech_rating: rand(1..5),
        tech_comment: 'tech comment',
        visit_rating: rand(1..5),
        visit_comment: 'visit comment',
        speedtest: Speedtest.create(cellular_speedtest_result)
      )
    end
  end
  puts '...and favorites'
  rand(0..6).times do
    Favorite.create(user: user,
                    destination_id: Destination.ids.sample)
  end
end

puts 'Seeding complete'
