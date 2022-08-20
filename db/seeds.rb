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
    category: 'hotel', image: 'https://ihg.scene7.com/is/image/ihg/holiday-inn-express-cabo-san-lucas-4061083978-16x9?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/cabo-san-lucas/sjdsl/hoteldetail',
    address: {
      street1: 'Corredor Csl - SJD KM. 4.5',
      street2: 'Col. El Tezal',
      city: 'Cabo San Lucas',
      zipcode: '23454',
      country: 'Mexico', latitude: 22.902735,
      longitude: -109.884096
    }
  },
  {
    name: 'Holiday Inn Express Veracruz Boca del Rio',
    desc: 'holiday-inn-express',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-express-boca-del-rio-3998658643-16x9?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/boca-del-rio/verpp/hoteldetail',
    address: {
      street1: 'Blvd. Adolfo Ruiz Cortines :4298 A',
      street2: 'Fracc. Costa De Oro',
      city: 'Boca Del Rio',
      zipcode: '94299',
      state: 'Veracruz',
      country: 'Mexico', latitude: 19.141682,
      longitude: -96.10317

    }
  },
  {
    name: 'Holiday Inn Veracruz Boca del Rio',
    desc: 'holiday-inn',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-boca-del-rio-3998314571-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/boca-del-rio/vcrmx/hoteldetail',

    address: {
      street1: 'Blvd. Adolfo Ruiz Cortinez : 4298',
      street2: 'Fracc. Costa De Oro',
      city: 'Boca Del Rio',
      zipcode: '94299',
      state: 'Veracruz',
      country: 'Mexico', latitude: 19.141812,
      longitude: -96.10334
    }
  },
  {
    name: 'Holiday Inn Veracruz Centro Historico',
    desc: 'holiday-inn',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-veracruz-3968729075-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/veracruz/vcrdt/hoteldetail',

    address: {
      street1: 'Calle Morelos 225',
      street2: 'Col. Centro',
      city: 'Veracruz',
      zipcode: '91700',
      state: 'Veracruz',
      country: 'Mexico', latitude: 19.201983,
      longitude: -96.138893
    }
  },

  {
    name: 'Candlewood Suites Celaya',
    desc: 'candlewood-suites',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/candlewood-suites-celaya-5114360258-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
    website: 'https://www.ihg.com/candlewood/hotels/us/en/celaya/bjxca/hoteldetail',

    address: {
      street1: 'Av. Eje Nor-Oriente 215, Manzana 177',
      street2: 'Casi esq. con Ribera del Campestre', city: 'Celaya', zipcode:  '38080',
      state: 'Guanajuato',
      country: 'Mexico', latitude: 20.5238618,
      longitude: -100.7781506
    }
  },

  {
    name: 'Holiday Inn Queretaro-Centro Historico',
    desc: 'holiday-inn',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6976573426-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqemx/hoteldetail',

    address: {
      street1: 'Av.5 De Febrero : 110', street2: 'Col. Ninos Heroes', zipcode: '76010',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.584956,
      longitude: -100.409774
    }
  },
  {
    name: 'Holiday Inn Queretaro Zona Krystal',
    desc: 'holiday-inn',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6201528258-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqebc/hoteldetail',

    address: {
      street1: 'KM. 11', street2: 'Carretera Queretaro-San Luis Potosi',
      zipcode: '76100',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.66294,
      longitude: -100.431745
    }
  },
  {
    name: 'Holiday Inn Queretaro Zona Diamante',
    desc: 'holiday-inn',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6225228617-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/queretaro/mqeap/hoteldetail',

    address: {
      street1: 'Anillo Vial II',
      street2: 'Fray Junipero Serra : 1500 - A', zipcode: '76140',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.620439,
      longitude: -100.38394
    }
  },
  {
    name: 'Crowne Plaza Queretaro',
    desc: 'crowne-plaza',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/crowne-plaza-queretaro-3252687880-3x2',
    website: 'https://www.ihg.com/crowneplaza/hotels/us/en/queretaro/mqecc/hoteldetail',

    address: {
      street1: 'ANILLO VIAL II',
      street2: 'FRAY JUNIPERO SERRA : 1500', zipcode: '76140',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.619217,
      longitude: -100.383278
    }
  },
  {
    name: 'Staybridge Suites Queretaro',
    desc: 'staybridge-suites',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/staybridge-suites-queretaro-6072304701-2x1?hei=512&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
    website: 'https://www.ihg.com/staybridge/hotels/us/en/queretaro/mqesb/hoteldetail',

    address: {
      street1: 'Carreta San Luis-Queretaro 10685',
      street2: 'Col. El Salitre Junto A Jurica',
      zipcode: '76127',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.662674,
      longitude: -100.433165
    }
  },
  {
    name: 'Candlewood Suites Queretaro Juriquilla',
    desc: 'candlewood-suites',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/candlewood-suites-queretaro-4815784940-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
    website: 'https://www.ihg.com/candlewood/hotels/us/en/juriquilla/qroja/hoteldetail',

    address: {
      street1: 'Santa Teresa 502 Int. A',
      street2: 'Fracc. Residencial Juriquilla Santa Fe',
      zipcode: '76226',
      city: 'Queretaro',
      state: 'Queretaro',
      country: 'Mexico', latitude: 20.691609,
      longitude: -100.445619
    }
  },
  {
    name: 'Mr & Mrs Smith Casa No Name',
    desc: 'mr-and-mrs-smith',
    category: 'hotel', image: 'https://digital.ihg.com/is/image/ihg/smith-san-miguel-de-allende-6638616690-2x1',
    website: 'https://www.ihg.com/mrandmrssmith/hotels/us/en/san-miguel-de-allende/bjxsd/hoteldetail',
    address: {
      street1: 'No. 52 Hernandez Macia',
      zipcode: '37700',
      city: 'San Miguel de Allende',
      state: 'Guanajuato',
      country: 'Mexico', latitude: 20.9163139,
      longitude: -100.7451721
    }
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
    password: firstname[0] + lastname,
    password_confirmation: firstname[0] + lastname,
    email: Faker::Internet.email(name: firstname[0] + lastname),
    bio: Faker::Quote.jack_handey,
    admin: false,
    image: 'https://source.unsplash.com/1600x900?portrait',
    address: Address.last
  )
end
puts 'Creating hotel destinations'
mexico_hotels.each_with_index do |dest, _index|
  Destination.create(category: dest[:category],
                     name: dest[:name],
                     desc: dest[:desc],
                     website: dest[:website],
                     image: dest[:image],
                     address: Address.create(dest[:address]))
end

puts 'Creating visits'
connection_types = %w[wifi cellular ethernet]
cellular_providers = %w[sprint att verizon]
test_providers = %w[speedtest speedcheck]
User.all.each do |user|
  puts 'Setting up user ' + user.username + ' visits'
  rand(1..5).times do
    startdate = Faker::Date.backward(days: 365)
    # connectiontype = connection_types.sample
    # connectionprovider = connectiontype == 'cellular' ? cellular_providers.sample : nil
    rand(12..20).times do
      speedtest_result = {
        latency: rand(5..70),
        download: rand(45..170),
        upload: rand(15..80),
        connectiontype: 'wifi',
        connectionprovider: nil,
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
    end
    rand(0..3).times do
      speedtest_result = {
        latency: rand(5..70),
        download: rand(45..170),
        upload: rand(15..80),
        connectiontype: 'ethernet',
        connectionprovider: nil,
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
    end
    rand(3..8).times do
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
  dest_ids = Destination.ids
  rand(0..6).times do
    Favorite.create(user: user,
                    destination_id: dest_ids.shuffle!.pop)
  end
end

puts 'Seeding complete'
