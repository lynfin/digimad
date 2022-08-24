# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
destinations = [
  {
    name: 'Holiday Inn Express Cabo San Lucas',
    desc: 'holiday-inn-express',
    category: 'lodging', image: 'https://ihg.scene7.com/is/image/ihg/holiday-inn-express-cabo-san-lucas-4061083978-16x9?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-express-boca-del-rio-3998658643-16x9?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-boca-del-rio-3998314571-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-veracruz-3968729075-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/candlewood-suites-celaya-5114360258-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6976573426-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6201528258-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-queretaro-6225228617-3x2?fmt=jpg&jpegSize=500&qlt=85&resMode=sharp2&op_usm=1.75,0.3,2.0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/crowne-plaza-queretaro-3252687880-3x2',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/staybridge-suites-queretaro-6072304701-2x1?hei=512&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/candlewood-suites-queretaro-4815784940-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
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
    category: 'lodging', image: 'https://digital.ihg.com/is/image/ihg/smith-san-miguel-de-allende-6638616690-2x1',
    website: 'https://www.ihg.com/mrandmrssmith/hotels/us/en/san-miguel-de-allende/bjxsd/hoteldetail',
    address: {
      street1: 'No. 52 Hernandez Macia',
      zipcode: '37700',
      city: 'San Miguel de Allende',
      state: 'Guanajuato',
      country: 'Mexico', latitude: 20.9163139,
      longitude: -100.7451721
    }
  },
  { name: 'BCNewt',
    phone: '+34 638 277 512',
    desc: 'BCNewt has been around since 2014, making it one of the earliest coworking spaces in Barcelona. Rates start at 150€ or 199€ for dedicated desks. Members have access 24/7, desks, workstations, indoor and outdoor lounge areas, a printer and photocopier, fiber optic internet, a kitchen, a shared landline phone, unlimited purified water, and parking for bikes. There is also free marketing consulting, discounts with partners, and community events. Spaces are available for groups as well.',
    category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1128/c_limit,w_752/v1/collections/cwr/coworking-locations/barcelona/barcelona-5b2a2d3e0621454cb241e9c5',
    website: 'https://www.bcnewt.com/en/',
    address: { street1: 'Calle Pere IV 74', street2: '', zipcode: '08005', city: 'Barcelona', country: 'Spain' } },

  { name: 'BCN575 Coworking',
    desc: 'BCN575 Coworking is open 24/7 and includes a coffee machine, water fountain, microwave, fridge, and utensils for members. There is a talking area for privacy, as well as a meeting room with flexible layout. Take advantage of fiber optic 100 MB cable or Wi-Fi internet and a copier/scanner/printer in color with your choice of A3 or A4. Phone lines and courier service are also available upon request. Personal desks start at 225€, with discounts for part-time and daily rates available, as well as private offices.',
    category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1128/c_limit,w_752/v1/collections/cwr/coworking-locations/barcelona/barcelona-5b2a2cdfe19a83f8bccd3206',
    website: 'https://bcn575.com/',
    address: { street1: 'Gran Via de les Corts Catalanes 575', street2: ' 1-1', zipcode: '08011', city: 'Barcelona',
               country: 'Spain' } },
  { name: 'Meet BCN',
    phone: '93 176 30 76',
    desc: 'Those in the design industry can consider coworking at Meet BCN, which also offers private offices, meeting rooms, and virtual office services. Fulltime coworking starts at 292€, including a receptionist, Wi-Fi and cable internet (300 MB), 24/5 availability, six hours in the meeting room, a business address, utilities, and monthly networking events and workshops. There are also options for using the space part of the day or on a weekly or daily basis. Private offices start from 300€ for two people with similar amenities, and larger offices are available to hold several people.',
    category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_518/c_limit,w_500/v1/collections/cwr/coworking-locations/barcelona/barcelona-5b2a2da6e19a8355fbcd320b',
    website: 'https://meetbcn.com/en/',
    address: { street1: 'Rambla de Catalunya 125', street2: '3-2', zipcode: '08008', city: 'Barcelona',
               country: 'Spain' } },
  { name: 'Makers of Barcelona',
    phone: '(+34) 93 667 4165',
    desc: 'MOB, or Makers of Barcelona, has been around for three years and is constantly changing. It is a coworking space as well as an event venue and place for collaboration. Full-day access starts at 130€, with dedicated desks starting at 190€ and lower prices for half days. All members get access to meeting rooms and MOB events, weekday access, a company address, and mail pickup. Once you opt for a dedicated desk, you get 24/7 access, and there are also options available for enterprises.',
    category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1128/c_limit,w_752/v1/collections/cwr/coworking-locations/barcelona/barcelona-5b2a2de87e37afd083bf271f',
    website: 'https://www.mob-barcelona.com/',
    address: { street1: 'C/ de Bailèn', street2: '11 bajos', zipcode: '08010', city: 'Barcelona', country: 'Spain' } },

  { name: 'University CoWork',
    desc: 'University Cowork is the first full-service coworking space on the south side of Chicago. It has not only won awards (first coworking space to be named “Best of Chicago" by Chicago Magazine), but also has some of the best reviews in the entire city. Kisi is an integral part of their high-end offerings, and the space has a great community development mission. Since opening, many people in their community have been educated and/or hired by companies with office space, virtual mail, and virtual memberships at University CoWork.',
    category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1880/c_limit,w_1410/v1/collections/cwr/coworking-locations/chicago/chicago-5eccdbfe4dc5c3c64895707b',
    website: 'https://www.universitycowork.com/',
    phone: '1-773-800-9751',
    address: { street1: '6127 S University Ave', street2: '', zipcode: '60637', city: 'Chicago', state: 'IL',
               country: 'United States' } },
  ## ERROR HERE
  # { name: '25N Coworking - Arlington Heights',
  #   desc: 'With modern design and full office amenities, 25N Coworking at Arlington Heights offers its member a great space to work at. The area is composed mostly of open spaces and offers a variety of different conference rooms catering to different needs. The staff here take coworking to a whole new level: professional, friendly and accomodating. The members commented that this space is truly a diamond in Chicago. If you want to expand your business circle, this is also the ideal option: plenty of networking events and activities are taking place here! 25N Coworking also has another location at 25 N River Ln, Geneva, IL 60134, a little further from downtown, but the amenities are just as great!',
  #   category: 'coworking',
  #   image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_898/c_limit,w_752/v1/collections/cwr/coworking-locations/chicago/chicago-5b4f32a89894175cac5a1ded',
  #   website: 'https://www.25ncoworking.com/locations/arlington-heights-il/',
  #   phone: '(847) 600-4284',
  #   address: { street1: '3400 W. Stonegate Blvd. ',
  #              street2: '#101',
  #              zipcode: '60005',
  #              city: 'Arlington Heights',
  #              state: 'IL',
  #              country: 'United States' } }

  # { name: 'Ampersand Cowork Logan Square',
  #   desc: 'Looking for vibrant atmosphere, helpful staff, comprehensive amenities at a reasonable price? You need look no further.',
  #   category: 'coworking',
  #   image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_920/c_limit,w_752/v1/collections/cwr/coworking-locations/chicago/chicago-5b4f37ad2a00edb102b41085',
  #   website: 'https://www.ampersandlogansquare.com/',
  #   address: { street1: '3317 West Fullerton Avenue', zipcode: '60005', city: 'Chicago', state: 'IL',
  #              country: 'United States' } }
  { name: 'Novel Co-working - The Loop',
    desc: 'Novel Coworking - The Loop offers perfect the solution to small businesses, startups and professionals. The space is designed to fit the needs of entrepreneurial-spirited companies and individuals, thus the amenities are professional and extensive. A professional and helpful vibe is formed and therefore can help your business thrive!', category: 'coworking', image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_900/c_limit,w_752/v1/collections/cwr/coworking-locations/chicago/chicago-5b4f3971e3a83d797942c93d',
    website: 'https://www.alignable.com/chicago-il/novel-coworking-chicago', phone: '(312) 561-5500',
    address: { street1: '73 W. Monroe St. Chicago', street2: '', zipcode: '60603', city: 'Chicago', state: 'IL', country: 'United States' } },
  ## ERROR HERE
  # { name: 'Blue 1647',
  #   desc: 'Are you tech-oriented and keen on innovation? Blue 1647 Tech Innovation Center is not only a great coworking space, but also an epicenter for technology and innovation in the city. New tech companies and startups that are growing fast find this space extremely suitable for their future growth.', category: 'coworking', image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1880/c_limit,w_752/v1/collections/cwr/coworking-locations/chicago/chicago-5b4f3d2bd4e7af34bf42d6f3',
  #   website: 'http://www.blue1647.com/', phone: '',
  #   address: { street1: '1647 S Blue Island Ave', street2: '', zipcode: '60608', city: 'Chicago', state: 'IL', country: 'United States' } }
  { name: 'NeueHouse', desc: 'Dedicated Desks: $1,500 /month', category: 'coworking',
    image: 'https://www.neuehouse.com/wp-content/uploads/2020/02/NeueHouseMSQ_Gallery_Wide.jpg', website: 'https://neuehouse.com/', phone: '', address: { street1: '110 E 25th St', street2: '', zipcode: '10010', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'Green Desk', desc: 'Dedicated Desk: Starting $199/month', category: 'coworking',
    image: 'https://greendesk.com/wp-content/uploads/2022/01/68Jay-GD_16-7.jpg', website: 'https://www.greendesk.com/&sa=D&ust=1530701033696000', phone: '', address: { street1: '155 Water St', street2: 'Brooklyn', zipcode: '11201', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'The Wing', desc: 'Coworking: $ 215/month', category: 'coworking',
    image: 'https://images.ctfassets.net/4qzau7lus3iz/3NXacpc40Qr9rfRsIHYoPE/ae6ada9155bd3a3ea9c967a1f60a76e6/The-Wing-BP-2021-16.JPG?w=800&h=548&q=100', website: 'https://www.the-wing.com/&sa=D&ust=1530701033698000', phone: '', address: { street1: '45 E 20th St', street2: '', zipcode: '10003', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'WeWork (Harlem)',
    desc: 'WeWork Harlem wants to move away from the corporate uniformity offered by other coworking spaces, even under the same brand. In addition to promoting comfort and relaxed ambiance, WeWork facility located at this address sees the diversity of its occupants as one of its key strengths. Amenities on the offer include coffee, access to conference rooms and phone boots, printing and beer on tap. As for coworking spaces, this one is ideal for a wide range of users, from startups to corporate entities. Dedicated desk: $500/month.', category: 'coworking', image: 'https://locations-api-production.imgix.net/locations/image/65fe58ca-5846-11ec-b9c0-0e6a5dc689cd/Web_150DPI-20210827_WeWork_-_8_W_126th_St_-_New_York_005.jpg?auto=format%20compress&fit=crop&q=50&w=600&h=338', website: 'https://www.wework.com/buildings/8-w-126th-st--new-york-city--NY', phone: '', address: { street1: '8 W 126th Street', street2: '', zipcode: '10027', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'The Farm Soho', desc: 'Dedicated desk: $319/month.', category: 'coworking',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_624/c_limit,w_500/v1/collections/cwr/coworking-locations/new-york-city/new-york-city-5b3c9ad6c4d21137d5264fe5', website: 'https://www.thefarmsoho.com/', phone: '', address: { street1: '447 Broadway', street2: '', zipcode: '10013', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'Primary',
    desc: 'Primary is all about the relaxing mood which does not stand in the way of productivity. Its amenities include espresso and snack bar, paired with dedicated spaces for yoga and meditation. A zen workplace for the thoughtful and contemplative audience. Coworking membership from $300/month.', category: 'coworking', image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_624/c_limit,w_500/v1/collections/cwr/coworking-locations/new-york-city/new-york-city-5b3c9b470554a9158d6d73c5', website: 'https://liveprimary.com/', phone: '+1 (212) 658-0077', address: { street1: '26 Broadway', street2: '', zipcode: '10004', city: 'New York', state: 'NY', country: 'United States' } },
  { name: 'The Camp David',
    desc: 'Camp David wants to distinguish itself by offering premium quality at the prices which will still not make you feel robbed. Its retro-futurist design goes hand in hand with café bars, library, gym and workshop rooms, all dedicated to making you feel rewarded for all the hard work you put there. Dedicated desk: $600/month.', category: 'coworking', image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_624/c_limit,w_500/v1/collections/cwr/coworking-locations/new-york-city/new-york-city-5b3c9b7e0554a95ed26d73c8', website: 'https://thecampdavid.com/', phone: '718.313.0111', address: { street1: '237 36TH STREET', street2: '', zipcode: '11232', city: 'Brooklyn', state: 'NY', country: 'United States' } },
  ## NEW DATA
  { name: 'Bright Loft in Sagrada Familia!',
    phone: '',
    desc: 'This modern and cozy Loft is located in a privileged location, right in the center of Barcelona. It is perfect for one person or for couples who want to live in one of the best neighborhoods in the city.',
    category: 'lodging',
    image: 'https://a0.muscache.com/im/pictures/1c8be4ca-72f4-4b84-a7c2-293f2aa7f714.jpg?im_w=1200',
    website: 'https://www.airbnb.com/rooms/16449601?adults=1&children=0&infants=0&check_in=2023-03-07&check_out=2023-03-14&federated_search_id=124e2a0e-5067-4cb3-b1c5-f026b9190599&source_impression_id=p3_1661254342_aYkBah1a6QLaMX1O',
    address: {
      street1: '',
      street2: '',
      zipcode: '',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'PENTHOUSE month/days Holy Family',
    phone: '',
    desc: 'The apartment is in a great location in Barcelona, walking distance to beach, sagrada familia and the centre of Barcelona. metro 2 minutes away for anything thats not walking distance...',
    category: 'lodging',
    image: 'https://a0.muscache.com/im/pictures/a9d42693-71d9-483b-9241-9b93be0dac8d.jpg?im_w=960',
    website: 'https://www.airbnb.com/rooms/23530545?adults=1&children=0&infants=0&check_in=2022-11-05&check_out=2022-11-12&federated_search_id=124e2a0e-5067-4cb3-b1c5-f026b9190599&source_impression_id=p3_1661254641_3RJ%2FY3yxS%2B6VymH6&modal=PHOTO_TOUR_SCROLLABLE',
    address: {
      street1: '',
      street2: '',
      zipcode: '',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'Hotel Arc La Rambla',
    phone: '+34 93 301 97 98',
    desc: 'The Hotel Arc La Rambla is located in the heart of Barcelona, on the Ramblas, a picturesque promenade linking the centre of Barcelona with the sea.Thanks to its location, you can visit by food lots of must-see places, as the Liceu, the Cathedral, the council or Colom Statue. Come to visit Barcelona and enjoy an unforgettable stay at this 3 star hotel in Barcelona.',
    category: 'lodging',
    image: 'https://hotelarclarambla.com/wp-content/uploads/2017/01/Hotel-arc-la-rambla-hotel-barcelona-Exteriores-fachada.jpg',
    website: 'https://hotelarclarambla.com/en/?msclkid=6134b5347ebd1589eaeed630c3248782',
    address: {
      street1: 'La Rambla 19',
      street2: '',
      zipcode: '08002',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'Diagonal Mar',
    phone: '93 567 76 37',
    desc: 'Do you know what a pop up store is? It’s a unique space where you can find special products and collections for limited time only. The Cube was designed to achieve two goals: on the one hand, letting new entrepreneurs as well as consolidated brands to show their products in an innovative and avant-garde environment. On the other hand, to offer a different and exclusive shopping experience to our customers.
    Placed at the top floor of the Diagonal Mar Shopping Center, in Barcelona. The Cube is waiting to surprise you!',
    category: 'public',
    image: 'https://tse4.mm.bing.net/th?id=OIP.DVxYlyG_lONSlmSBm-E0oAHaE8&pid=Api&P=0',
    website: 'https://www.diagonalmarcentre.es/en/stores/',
    address: {
      street1: 'Ronda Litoral Exit 24',
      street2: '',
      zipcode: '',
      city: 'Barcelona',
      country: 'Spain',
      latitude: 41.41020,
      longitude: 2.21599
    } },
  { name: 'Biblioteca Francesca Bonnemaison',
    phone: '932 687 360',
    desc: 'The public library system in Barcelona is quite easy to navigate – obtaining a library card is free and the book lending systems are relatively the same (you can take a book out for 3 weeks) and they even have laptop lending now as well! ',
    category: 'public',
    image: 'https://bibliotecavirtual.diba.cat/documents/346848/3584872/escales.jpg/7b7bb34d-c6bd-42f1-89a5-82def2382fe6',
    website: 'https://bibliotecavirtual.diba.cat/barcelona-ciutat-vella-biblioteca-francesca-bonnemaison',
    address: {
      street1: 'Carrer Sant Pere més Baix',
      street2: '',
      zipcode: '08003',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'Starbucks Rambla 109 (Canaletes)',
    phone: '93.304.35.53',
    desc: '',
    category: 'dining',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/S4cF5bDvUQOsFx5BkCmEhg/o.jpg',
    website: 'https://www.yelp.com/biz/starbucks-barcelona-746',
    address: {
      street1: '109 Rambla Canaletas',
      street2: '',
      zipcode: '8002',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'Granja Petitbo',
    phone: '93 265 65 03',
    desc: 'Until the early 20th century, a city dairy farm (vaquería, where urbanites would go to get fresh milk) stood on this site. But times change, and it’s now a Scandi-inspired café with an excellent design. They serve all kinds of food for breakfast (including different scrambled egg dishes), and afternoon snacks such as home-made cakes and tempting sandwiches. There’s also a dish of the day that’s worth a try, while on Saturday and Sunday they serve brunch. To sum up, whenever you go, you could find yourself staying the whole day.',
    category: 'dining',
    image: 'https://media.timeout.com/images/100667087/1024/576/image.jpg',
    website: 'https://www.timeout.com/barcelona/restaurants/granja-petitbo',
    address: {
      street1: 'Passeig de Sant Joan, 82',
      street2: 'Eixample Dreta',
      zipcode: '08009',
      city: 'Barcelona',
      country: 'Spain'
    } },
  { name: 'Spacious & Sunny 1 BDR filled w/ plants - Logan SQ',
    phone: '',
    desc: 'A perfect spot to enjoy food & drinks in Logan Square, or work from home with a fast WiFi.  The office has a work space with a 27" LG 4K Monitor, a Steelcase office chair, a charging station, a 300 Mbps WiFi, and wired Ethernet.',
    category: 'lodging',
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-19245639/original/a5c35a21-5767-4406-a787-eded5e471c23.jpeg?im_w=960',
    website: 'https://www.airbnb.com/rooms/19245639?adults=1&children=0&infants=0&check_in=2023-02-11&check_out=2023-02-18&federated_search_id=f4db0fd5-141d-423a-a9c0-809cdd84cb1c&source_impression_id=p3_1661291091_dJgwrXWWm7JPcRov',
    address: {
      street1: '',
      street2: '',
      zipcode: '',
      city: 'Chicago',
      state: 'IL',
      country: 'United States'
    } }
  # { name: 'Loews Chicago Hotel',
  #   phone: '312-840-6600',
  #   desc: 'Experience Chicago from the heart of the city. The luxurious Loews Chicago Downtown Hotel, situated steps from Navy Pier, offers guests spectacular city skyline and lake views while enjoying the comforts of home. Our top-rated luxury hotel in Downtown Chicago is ideally located near Magnificent Mile, and close to the citys most popular attractions including Millennium Park and the John Hancock Center.',
  #   category: 'lodging',
  #   image: 'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5af1b60b95cc6.jpg/1920x1080/resize/80/a0c01e215aae74b27c57fd09e1e754f4.jpg',
  #   website: 'https://www.loewshotels.com/chicago-downtown',
  #   address: {
  #     street1: '455 North Park Drive',
  #     street2: '',
  #     zipcode: '60611',
  #     city: 'Chicago',
  #     state: 'IL',
  #     country: 'United States'
  #   } },
  # { name: 'Millennium Park',
  #   phone: '',
  #   desc: 'ChicagoWiFi is free public wireless access available at City facilities throughout Chicago. Look for the network ChicagoWiFi or CPLWIFI on your device. No special settings, usernames or passwords are required. You’ll need to accept terms of use to connect to the network',
  #   category: 'public',
  #   image: 'https://www.chicago.gov/content/dam/city/depts/dca/MillenniumPark/tours/mptour800.jpg',
  #   website: 'https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html',
  #   address: {
  #     street1: '55 N. Michigan',
  #     street2: '',
  #     zipcode: '',
  #     city: 'Chicago',
  #     state: 'IL',
  #     country: 'United States'
  #   } },
  # { name: 'Chicago Public Library - Chinatown',
  #   phone: '(312) 747-8013',
  #   desc: 'A new 16,000-square-foot, two-story Chinatown Branch opened August 29, 2015 with a partially covered “living” roof, Feng shui-influenced interior design and expansive views of the city.',
  #   category: 'public',
  #   image: 'https://chipublib.bibliocommons.com/events/uploads/images/full/b4c2f1ea58572c02e4ed70cd0bb1a18f/chinatown.jpg',
  #   website: 'https://www.chipublib.org/locations/20/?_ga=2.95095580.1041427374.1661292531-1194146154.1661292531',
  #   address: {
  #     street1: '2100 S. Wentworth Avenue',
  #     street2: '',
  #     zipcode: '60616',
  #     city: 'Chicago',
  #     state: 'IL',
  #     country: 'United States'
  #   } },
  # { name: 'Aurelios Pizza',
  #   phone: '(312) 374-4459',
  #   desc: 'Aurelios made its triumphant return to Chicago proper with this massive South Loop space that allows visitors to stretch out inside (or on the outdoor deck) and get to work.',
  #   category: 'dining',
  #   image: 'https://2fblmq8emgh1mlotp2d7oe01-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/homepage-video-poster-update.jpg',
  #   website: 'http://aureliospizza.com/',
  #   address: {
  #     street1: '1212 S Michigan Ave',
  #     street2: '',
  #     zipcode: '60605',
  #     city: 'Chicago',
  #     state: 'IL',
  #     country: 'United States'
  #   } },
  # { name: 'Proyecto 7, Juriquilla',
  #   phone: '',
  #   desc: 'Private offices (1,2,3 or four persons). Coworking spaces. Virtual Offices.  Meeting Rooms',
  #   category: 'coworking',
  #   image: 'https://coworker.imgix.net/photos/mexico/santiago-de-queretaro/proyecto-7-juriquilla-2/main.jpg?w=921&h=556&q=90&auto=format&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle',
  #   website: 'https://www.coworker.com/mexico/santiago-de-queretaro/proyecto-7-juriquilla',
  #   address: {
  #     street1: '399-21 Boulevard Universitario',
  #     street2: '',
  #     zipcode: '',
  #     city: 'Queretaro',
  #     country: 'Mexico'
  #   } }

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
puts 'Creating  destinations'
destinations.each_with_index do |dest, _index|
  puts 'Creating ' + dest[:name]
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
        download: rand(100..170),
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
        download: rand(100..170),
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
        download: rand(100..170),
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

puts 'Creating additional cellular tests'
Destination.all.each do |destination|
  rand(2..5).times do
    startdate = Faker::Date.backward(days: 365)
    connectiontype = 'cellular'
    connectionprovider = cellular_providers.sample

    cellular_speedtest_result = {
      latency: rand(5..70),
      download: rand(100..170),
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
      user_id: User.ids.sample,
      destination_id: destination.id,
      desc: Faker::GreekPhilosophers.quote,
      tech_rating: rand(1..5),
      tech_comment: 'tech comment',
      visit_rating: rand(1..5),
      visit_comment: 'visit comment',
      speedtest: Speedtest.create(cellular_speedtest_result)
    )
  end
end
puts 'Seeding complete'
