import React from 'react';
import Footer from '../../components/footer-section/Footer';
import Dropdown from '../../components/nav-seection/Dropdown';
import Navbar from '../../components/nav-seection/Navbar';
// import AuthContext from '../../context/auth/authContext';

const Dashboard = ({ isOpen, toggle }) => {
  // const authContext = useContext(AuthContext);

  // const { isAuthenticated, logout, user } = authContext;
  // const onLogout = () => {
  // 	logout();
  // };

  // useEffect(() => {
  //   authContext.loadUser();
  //   // eslint-disable-next-line
  // }, []);

  // const authLinks = (
  // 	<>
  // 		<li>Hello {user && user.name}</li>
  // 		<li>
  // 			<a onClick={onLogout} href='#!'>
  // 				<i className='fas fa-sign-out-alt'>
  // 					{' '}
  // 					<span className='hide-sm'>Logout</span>
  // 				</i>
  // 			</a>
  // 		</li>
  // 	</>
  // );
  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      {/* <ul>{isAuthenticated ? authLinks : ''}</ul> */}

      <div className='py-14 px-28'>
        <h1 className='text-center text-3xl md:text-3xl xl:text-5xl font-bold w-full '>
          Hello Folks...
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. In dolore facere vel tempore recusandae. Qui
          molestias nihil accusamus. Distinctio accusantium
          molestias eaque tempore perferendis, adipisci
          eligendi? Tempora voluptates praesentium quos.
          Repellat voluptas ipsa sed voluptatum minima
          numquam maiores tempore molestiae ullam eius
          quibusdam voluptate eos cumque, iure, eveniet
          temporibus aut aspernatur earum culpa dolorum
          dolorem? Dolores tempora inventore aperiam illo!
          Eveniet, dolore. Veritatis dolores, illo iste quo,
          inventore consequuntur assumenda sit doloribus
          repellendus nihil qui amet? Inventore veritatis
          exercitationem perferendis mollitia itaque
          accusamus, cum animi. Nemo ducimus nulla deleniti
          recusandae! Consequatur vitae possimus deleniti
          beatae! Velit quisquam in id odit harum assumenda
          iure sequi deserunt exercitationem blanditiis, sed
          perferendis ipsam expedita facilis magnam?
          Repellat, dicta recusandae natus necessitatibus
          magnam deleniti! In deserunt, reprehenderit
          molestiae saepe similique aut amet assumenda autem
          nemo inventore voluptatum harum commodi fugit,
          ipsum consectetur animi totam eaque dicta
          repudiandae? Culpa voluptatem asperiores obcaecati
          illo quibusdam expedita? Laborum exercitationem
          doloribus enim a soluta assumenda ducimus
          reiciendis nam eius. Velit facere dignissimos
          aliquid nam et cum qui asperiores neque
          cupiditate, recusandae, repellat deserunt, enim
          dolore aperiam quam voluptatem. Exercitationem
          nesciunt corporis nisi in officiis! Saepe eveniet,
          a minima libero officiis reiciendis voluptate
          dolorum harum facilis similique asperiores,
          accusantium dolores ut in, non ipsam molestias
          pariatur dicta! Ratione, possimus! Quas molestias
          alias iste dolorum, minima doloribus rem eaque
          sapiente amet cupiditate harum sed, dolores
          repellat! Culpa, blanditiis obcaecati reiciendis
          quidem commodi molestias rerum facere. Laborum
          veniam molestiae quae illum! Accusamus doloribus
          necessitatibus, in rerum sed itaque iste assumenda
          eaque! Et hic pariatur eligendi quidem quis porro,
          iste qui vel modi omnis doloribus. Dolore, porro
          vel sunt dolor repellat quis? Soluta possimus ex
          consequuntur ratione repellendus voluptate
          aspernatur minus! Commodi dignissimos ipsa
          asperiores accusamus officiis obcaecati dicta.
          Molestias iure, aperiam, harum quidem enim
          accusantium perferendis qui deleniti cupiditate
          nobis aliquam? Quasi accusantium neque atque
          quisquam, dolorem tenetur quos excepturi aut
          praesentium, aperiam esse nisi! Beatae illo illum,
          obcaecati odio voluptate quasi cumque aut, nemo
          facere nesciunt doloremque veritatis commodi
          similique. Reprehenderit impedit assumenda neque
          animi ipsum voluptatem ipsa, quod modi numquam?
          Harum nam voluptatibus officia minima tenetur nisi
          dicta quae error, ipsum repellat ratione numquam
          repudiandae iste eveniet culpa incidunt. Eveniet
          eaque exercitationem pariatur quas aperiam, rem
          veritatis nobis libero, soluta quis amet! Unde
          inventore sunt optio perspiciatis commodi ullam
          error modi temporibus numquam voluptates aperiam,
          illum facere laudantium? Quod? Adipisci sed iste
          assumenda dolore laborum veritatis cum, autem nam
          hic a perspiciatis totam quas vero at quam enim
          nulla, eum soluta quaerat blanditiis sint
          recusandae. Ipsam odio sed corporis! Debitis non
          repellat nostrum doloremque adipisci commodi
          eveniet eius explicabo minima deleniti earum,
          cupiditate et veniam iste illum, nisi repellendus
          natus tenetur distinctio, dicta provident quam
          magni consectetur? Tenetur, autem. Suscipit,
          voluptatum eligendi impedit atque explicabo
          dignissimos doloremque, natus officia magnam totam
          tempore iure eius reprehenderit ducimus id
          veritatis ipsum nemo sint dicta quos? Nisi
          laboriosam sint hic animi corrupti. Dolore
          adipisci illo aut, minima, numquam, recusandae
          sunt quisquam accusamus ex vel repudiandae ut.
          Molestias esse, inventore laboriosam consequatur,
          maiores, ut possimus quisquam amet deleniti quam
          debitis voluptates! Quas, nam. Voluptatem
          assumenda alias, nulla, exercitationem laudantium
          odio, porro quidem voluptates quaerat sequi
          debitis? Magni temporibus optio est similique
          consequatur quidem, animi, eos laudantium, numquam
          accusamus esse quod dolor perferendis aliquid.
          Minima suscipit animi, accusantium, blanditiis
          quisquam deserunt nobis architecto molestias
          impedit necessitatibus quo distinctio error
          numquam, exercitationem possimus maiores harum
          dolor assumenda fugit. Aliquam provident facilis
          nulla nostrum, esse temporibus? Quia voluptas
          doloremque maxime impedit suscipit quis
          praesentium laudantium magnam provident deleniti
          sequi optio cumque asperiores, dolorem harum
          dolores nam temporibus perferendis. In, accusamus
          cupiditate. Eaque corporis laudantium quis
          repudiandae. Mollitia enim, consectetur deleniti
          explicabo aliquid debitis dolorum voluptatibus
          nesciunt qui, voluptatem quo in ullam inventore
          amet cum corrupti fugiat? Et eius porro ullam
          quasi iure delectus ipsam, officia ab. Quos
          repudiandae dolor voluptatem dolores veritatis, ad
          tenetur quia eaque unde eum, quo cumque repellat
          eos dolore nesciunt ex maxime voluptatum magni
          assumenda nostrum voluptatibus placeat saepe? Sit,
          accusamus inventore? Omnis atque numquam harum
          repudiandae molestiae temporibus, maiores impedit
          provident quas eligendi, eum autem rerum, beatae
          inventore architecto consequatur. Facere commodi
          reiciendis deleniti qui fuga ducimus perferendis,
          a repudiandae nemo! Dolorem, alias autem,
          consequatur quae eos ab soluta neque, cumque quia
          facilis hic mollitia qui quos beatae! Veniam
          exercitationem nesciunt maiores excepturi dolorem
          officia optio, repudiandae praesentium veritatis
          dignissimos magnam. Fuga accusantium fugit
          laudantium et numquam consequatur vitae, sed,
          facilis repudiandae, hic assumenda molestiae
          explicabo? Quaerat saepe dignissimos itaque
          consequatur corrupti doloribus, temporibus ex,
          quis reprehenderit, ab architecto adipisci fuga!
          Culpa doloremque incidunt, nisi nobis aperiam, qui
          fuga aspernatur rerum assumenda eaque accusantium
          commodi iste minima. Repudiandae nam aspernatur
          odit. Odit consequatur voluptate praesentium natus
          neque dolores perferendis quas quaerat. Vitae ad
          quas nesciunt, totam accusamus recusandae
          temporibus autem praesentium nostrum labore sed
          eos perferendis deleniti explicabo expedita,
          voluptates possimus eum magni commodi odio nisi
          iusto id ipsa nulla. Omnis. Vel aperiam ipsum rem
          aliquid facilis, suscipit laudantium, porro
          sapiente molestiae obcaecati officia facere
          dolorum voluptas quaerat ratione hic veniam harum
          modi unde quasi nihil non tempora possimus fuga?
          Voluptatum? Voluptas vero distinctio eveniet
          molestiae nisi numquam enim explicabo placeat,
          cumque consectetur corrupti quo itaque? Autem
          veniam eveniet omnis minima dolores soluta beatae
          tenetur! Voluptatum ad error minus ea repellendus.
          Assumenda cupiditate beatae ex alias magni
          distinctio deleniti veniam eligendi voluptatibus
          temporibus quis libero est et illo commodi
          molestias dicta ipsa aliquid eaque eum, nulla
          dolor voluptatem perferendis itaque! Fugit. Nihil
          tempora maiores a numquam quos ipsam debitis
          maxime iure? Aperiam incidunt iure fugiat est sunt
          impedit, assumenda quasi rerum nihil cum!
          Repellendus quam id voluptatibus quae quisquam est
          mollitia! Provident, minima facilis. Voluptas
          mollitia officiis harum deleniti doloremque
          numquam atque voluptatum id quae non consequatur,
          soluta pariatur minima quas eveniet qui velit
          temporibus ducimus? Quis culpa quibusdam ipsa
          placeat? Dolor consectetur architecto omnis eum ea
          nam, quia minus officia. Alias dignissimos illo
          maiores, molestias consectetur at similique velit
          unde. Doloremque eos nisi cum pariatur unde vel
          ipsa distinctio fugiat! Nobis laborum modi
          explicabo laboriosam consequuntur inventore
          accusantium sequi tenetur ratione ipsum doloremque
          vel, sint alias rem temporibus harum enim expedita
          iure facere, cum repellat nesciunt perferendis!
          Ad, repellat cupiditate. Blanditiis dolor sapiente
          ab dolorum quisquam iste voluptatem eligendi.
          Eaque nemo sit aperiam maxime pariatur, et soluta
          nihil porro impedit autem tenetur modi nulla
          fugiat molestiae iste sequi quasi dolore.
          Repellendus, dolorum natus atque nobis
          voluptatibus quibusdam doloribus distinctio
          accusantium. Pariatur ipsa sint esse qui ullam
          quas sunt alias suscipit quo aperiam, omnis, atque
          blanditiis, iure perferendis aliquid ex magnam?
          Perferendis, quisquam! Animi culpa modi illo
          nesciunt. Molestias unde numquam ex qui temporibus
          saepe dolores! Iusto cumque quisquam ex assumenda.
          Odit dicta autem, architecto molestiae qui animi
          facilis mollitia libero? Itaque similique tempora
          harum eligendi corrupti, esse deserunt excepturi
          delectus error dolorum quas officiis minima
          consequuntur, dolorem laboriosam. Ab aspernatur id
          perspiciatis nulla doloremque et voluptatibus enim
          quam dolores excepturi. Iusto laudantium quae
          nihil aut natus. Consequatur quaerat consectetur
          eligendi. Laudantium sint ex labore ipsam qui?
          Voluptas quae quia accusantium? Omnis vel ratione
          numquam optio error deleniti quas doloremque
          laborum. Autem ullam molestias dicta sapiente
          debitis beatae doloremque quidem quod quae
          suscipit nulla, ut illo maxime laborum cumque
          delectus doloribus sint et eveniet velit voluptas
          asperiores hic libero. Exercitationem, dolores.
          Optio deserunt magnam consequuntur minus est iure
          unde, iste quod nam minima vel harum quibusdam
          dolore esse corporis veritatis sed cupiditate
          animi inventore. Incidunt soluta doloremque enim
          saepe asperiores ullam? Itaque, quidem illo?
          Perspiciatis quasi aliquid laudantium ipsam iure
          eaque numquam maxime, obcaecati earum cupiditate!
          Voluptatem alias distinctio nesciunt animi,
          suscipit cum sequi perspiciatis exercitationem
          beatae et commodi, voluptate sapiente? Placeat
          asperiores magnam iste, alias molestias quasi
          dicta facilis enim tenetur culpa, ut veniam, odio
          quod minima obcaecati earum amet officiis!
          Veritatis laboriosam delectus quas iste vel.
          Architecto, autem fugit! Voluptatum ullam itaque
          impedit ipsum, rem possimus harum perspiciatis
          expedita earum deleniti, optio esse? Beatae qui
          optio porro vero quaerat modi facere accusamus,
          provident, odit minima incidunt ipsa, quisquam id.
          Ullam neque odio sapiente recusandae, a magnam
          iste sequi molestias. Eos nesciunt reprehenderit
          illum quas sequi. Eius eveniet veniam ea
          reprehenderit officiis excepturi voluptate numquam
          expedita perferendis ad? Magnam, delectus? Ipsam
          consequuntur laborum libero, saepe facilis
          dignissimos sint perferendis. Ullam voluptate
          laudantium officiis fugiat tenetur quisquam,
          debitis quis vel possimus perspiciatis porro
          ratione, inventore incidunt at necessitatibus ut
          distinctio quia. Dolorem exercitationem beatae
          possimus fugit. Quae hic reiciendis ab. Molestiae
          ducimus fugit ipsa, odit rem deleniti, expedita
          nostrum sit, facilis omnis similique. Expedita ut
          ad quam voluptatum distinctio atque quasi! Magni
          odit animi error, ullam officiis sapiente
          consectetur molestiae odio eligendi hic repellat!
          Iste dolore corporis error facere. Tempore quo
          incidunt modi odit magnam nam distinctio, vel
          mollitia non nobis. Perferendis quas et accusamus
          tempore ipsum deserunt obcaecati laudantium vel.
          Suscipit consectetur libero provident maiores sint
          non facere autem dicta nam sunt optio, dolore
          voluptate in velit ea asperiores nostrum. Sapiente
          minus, quos aperiam excepturi quas reprehenderit
          expedita reiciendis, sequi ex eligendi voluptate
          quia incidunt vitae illo necessitatibus a optio,
          delectus error maxime saepe aliquid amet odit
          laborum soluta. Quidem. Inventore, pariatur
          repellendus culpa sed corrupti in delectus,
          reiciendis eveniet odio unde repudiandae sapiente
          perspiciatis blanditiis esse velit ipsum quisquam
          consequatur aperiam possimus perferendis dolorem?
          Rem ex natus quidem ipsa! Placeat hic, ipsum ea
          corrupti error illum assumenda, corporis quisquam
          commodi magnam ex illo explicabo neque soluta quia
          esse est at dicta labore culpa. Cupiditate est non
          incidunt architecto dolorem? Nisi explicabo
          nesciunt ratione incidunt, consequatur adipisci
          quia modi dignissimos totam libero placeat quis
          numquam, distinctio deserunt reprehenderit beatae
          fugiat mollitia molestiae odio consequuntur
          nostrum exercitationem. Veniam consectetur
          deleniti ex? Soluta, laboriosam ullam temporibus
          rem nisi, illo maxime deserunt numquam aliquam
          vero itaque, corrupti modi dicta vel fugit
          consectetur esse quisquam non ipsa? Necessitatibus
          et tempore atque, excepturi corrupti enim?
          Nesciunt praesentium voluptatem nemo officiis et
          architecto eius quaerat pariatur quas sit
          exercitationem recusandae, vel error? Quidem id
          molestias, iusto ex quam neque laboriosam vero
          quibusdam doloremque dignissimos provident porro.
          Voluptas eaque quam, corporis, sint animi incidunt
          fugit, optio numquam dolorum error reiciendis
          voluptatem? Neque eius laborum ducimus iste
          necessitatibus totam! Neque maiores, id laborum
          explicabo esse dolorem repudiandae vero. Vitae
          similique itaque aperiam alias labore dolor libero
          fugiat facere quasi molestias modi perferendis
          voluptatum quod aliquid sapiente quos, deserunt
          cum laboriosam nesciunt voluptate impedit dolorum.
          Ipsum doloremque similique velit! Tempora, cumque
          vel eligendi excepturi repellendus odio nisi
          impedit iusto delectus commodi, est culpa
          blanditiis fuga eveniet in quibusdam deserunt
          magnam veritatis sunt dolor accusamus nesciunt
          debitis! Cum, quas exercitationem. Repellendus
          magni error eos itaque, officiis blanditiis
          dolorum perferendis, quisquam numquam voluptas
          reiciendis aspernatur tempora provident cumque
          architecto minima doloremque, beatae deserunt
          possimus repellat quidem distinctio! Alias culpa
          perferendis reprehenderit. Molestias adipisci
          illum possimus vel non, dignissimos doloribus
          ipsam, nulla eligendi fuga cum at quo provident
          repellat numquam ab sunt a, natus quia.
          Voluptatibus veniam tempora pariatur consequatur
          quibusdam laboriosam? Fugiat repellendus magnam
          obcaecati, perspiciatis nostrum illum perferendis
          ab aperiam error quod tenetur repellat
          necessitatibus molestiae voluptate odit expedita
          laudantium soluta quisquam? Recusandae odit iusto
          possimus natus, deserunt sint officiis. Ea ab ipsa
          commodi illum iure minus error, nam, vel eius
          dicta distinctio ut accusamus repellat numquam
          odit saepe. Saepe minus temporibus ab a,
          exercitationem accusantium repellendus porro
          cumque et. Nam corrupti, cum officia quaerat
          voluptatum inventore facilis minus amet odio quis,
          repudiandae error dolore impedit repellendus in
          itaque! Corrupti reprehenderit expedita quis
          dolores labore fuga nesciunt facere inventore
          placeat! Veniam excepturi deleniti possimus
          doloribus reiciendis accusamus est earum quam,
          recusandae natus obcaecati omnis sapiente nisi vel
          consequuntur dicta magni at fugit iste itaque?
          Doloremque dolore nulla nostrum facere aspernatur.
          Architecto mollitia quod quos nam facilis
          reiciendis ducimus soluta non dolores consectetur
          quae commodi magnam quas ea, dolore delectus
          laborum tenetur voluptates minima optio, harum eum
          error! Fugiat, unde obcaecati? Dignissimos
          blanditiis libero placeat repellat ipsam molestiae
          excepturi dolor natus amet impedit dolore cumque
          perferendis et quisquam, sequi magni non,
          distinctio sunt deleniti at obcaecati adipisci
          minima deserunt? Omnis, dignissimos! Quis aperiam
          eum impedit cupiditate dolore nisi ullam laborum!
          Ratione odit quo quae cupiditate corrupti
          voluptates aut beatae ipsam, dicta eaque aperiam
          non. Laudantium quasi dignissimos vel, illo
          ducimus voluptates. Ullam officiis nihil esse
          doloremque doloribus nemo minus eligendi sapiente
          nulla labore architecto quod quis nostrum dolor
          voluptate maxime, ex magnam laborum eum iusto
          repellat maiores delectus molestiae dolorem!
          Voluptate! Temporibus impedit, iusto rem
          necessitatibus quas perspiciatis eveniet, magnam
          explicabo voluptates quis minima veniam nisi
          laboriosam, corrupti fugit ab inventore eos?
          Assumenda quas aut, doloremque reiciendis aliquid
          maxime architecto iste. Inventore, dignissimos
          laborum assumenda voluptas magnam ipsum, mollitia,
          officiis corrupti et iure earum culpa error
          quisquam. Praesentium, natus recusandae quos
          reiciendis unde cumque, sed asperiores consectetur
          temporibus eum ipsum? Ad? Cum incidunt nostrum
          quisquam ipsum eius dolor, dignissimos, facilis
          expedita sint deleniti explicabo debitis accusamus
          ex animi minus. Perspiciatis ea quis sint beatae
          deleniti corporis nostrum, fuga minus debitis rem?
          Laborum culpa sapiente cum deserunt tempore
          quibusdam iste exercitationem, laboriosam adipisci
          quos vitae minus placeat provident recusandae nisi
          officiis ratione, iure earum! Ad labore sequi quia
          numquam soluta at? Temporibus. Earum porro ab
          fugit pariatur deleniti. Eveniet consequatur modi
          ipsa iusto ducimus sapiente iure rerum natus non.
          Soluta fugit commodi autem perspiciatis neque quae
          fugiat recusandae, quidem, quisquam, error quasi!
          Sint, error! Vel iure, hic nam incidunt obcaecati
          rerum facilis cum ad labore officiis molestias
          beatae expedita necessitatibus animi tempora id
          facere quibusdam est quae enim ullam eveniet
          temporibus. Vero. Maxime consequatur, voluptatum
          consectetur voluptas incidunt corporis cupiditate
          sequi aperiam consequuntur eius in eveniet
          asperiores beatae magni rem exercitationem tempora
          nihil? Atque sapiente mollitia necessitatibus iure
          neque cupiditate impedit aut! Provident asperiores
          modi ex at vitae beatae animi et dolor ab
          exercitationem fuga explicabo, architecto
          voluptatum, recusandae rem, facere aspernatur.
          Quasi reiciendis id error aliquam delectus,
          accusantium architecto vitae eveniet. Qui
          provident consectetur obcaecati repudiandae,
          dolorem dolore recusandae voluptatem molestias
          quia debitis aperiam sapiente. Corporis dolorum
          laboriosam eligendi corrupti autem quod, nihil
          amet non, harum officia debitis incidunt et illo!
          Expedita, debitis ea nostrum corrupti sint eos
          aspernatur ullam magni tempora, facilis autem
          reiciendis vero culpa nihil labore magnam
          recusandae sed harum modi saepe impedit ex, omnis
          eius? Quod, et. Voluptatem ratione, vero ducimus
          consectetur nemo error sequi! Repellat eos quam
          fugit blanditiis ipsa exercitationem, distinctio
          dolorum culpa facere quia tempora perspiciatis
          fuga non qui ducimus? Consequatur culpa iure
          reiciendis. Ab laudantium inventore labore
          reprehenderit, accusamus voluptatum? Unde totam
          recusandae nisi tempora sunt natus ab autem quia
          quo? Fugit deleniti perspiciatis sapiente modi
          illo cupiditate ratione exercitationem consequatur
          at placeat. Error quibusdam aperiam voluptate
          voluptates officiis possimus aut itaque
          architecto, debitis eius. Quia aliquam atque
          velit, itaque a doloribus veritatis. Ipsam, minus
          ab ut aspernatur natus blanditiis neque doloribus
          dolores! Ex deserunt, hic porro tenetur illum illo
          error iusto dignissimos itaque magni provident
          sapiente beatae! Recusandae, nesciunt vero hic
          saepe minus soluta minima perspiciatis laboriosam.
          Rerum expedita distinctio repellendus non.
          Perferendis harum atque facere! Recusandae,
          tempora. Id laborum ea assumenda dolor facilis nam
          maiores et a tenetur atque laboriosam odit placeat
          dolorem minima quaerat inventore vel, error
          repudiandae labore aspernatur? Laudantium quia
          consequuntur dolorum perferendis, adipisci
          repudiandae placeat sint veniam quo aperiam ipsam,
          quod vel unde laboriosam deserunt. Dolorem,
          repudiandae ea obcaecati quas incidunt temporibus
          vitae expedita? Aperiam, accusamus possimus. Quod
          nobis, cupiditate aliquid quis libero eveniet
          quasi, eaque, sit officia laudantium facilis
          labore maxime eligendi ipsam earum nostrum
          consectetur veniam distinctio itaque ab qui quae?
          Beatae perspiciatis natus culpa? Impedit corrupti
          veniam eius voluptatum omnis assumenda suscipit
          amet ab a tempore quam quo alias libero recusandae
          in temporibus inventore, at maiores iure sint
          placeat modi ad. Veniam, iure placeat. Vero
          officiis nisi enim, illo dignissimos laborum sint
          dolor, officia voluptas quis eum. Id voluptatem
          molestiae nihil voluptatibus, tempore laborum
          quasi aut nobis accusamus vel fuga reiciendis
          quibusdam aliquid illum. Sequi facere repellendus,
          odit ratione omnis, itaque error, libero eum at
          laudantium corporis dolore dolorum ad quibusdam.
          Accusamus a ipsum et enim. Aperiam a ab possimus,
          dignissimos debitis nisi ducimus. Sequi numquam et
          necessitatibus aliquam doloribus delectus sunt
          aperiam? Aut exercitationem expedita doloremque
          consequatur est tenetur quis, explicabo minus
          nihil ducimus nisi, in debitis delectus! Officiis
          provident ut ipsam? Corrupti. Dolore mollitia ab
          nam! Illum minima veritatis similique placeat
          minus incidunt sequi laboriosam itaque delectus
          voluptate quibusdam, fugiat necessitatibus cum,
          dignissimos tempora aspernatur tenetur, culpa non
          possimus temporibus corrupti alias. Nam nulla
          earum cum expedita enim asperiores consequuntur
          culpa? Voluptate porro voluptas numquam deleniti
          optio reiciendis aspernatur nesciunt officiis.
          Itaque ex rem voluptatem accusantium velit, earum
          voluptatum nam qui pariatur? Sapiente beatae
          dolorem, perspiciatis natus repellat esse ut
          molestias quaerat maxime cum sint soluta aut
          recusandae, obcaecati dicta nisi aliquam
          consequatur! Aut soluta sapiente id veniam
          quibusdam delectus cumque sequi! Est ullam quidem
          adipisci cupiditate, consequatur corporis modi
          similique laborum qui eos tempora animi, non
          nesciunt beatae sapiente eius placeat deleniti
          deserunt voluptate? Nemo earum ullam voluptate
          vitae! Totam, mollitia! Ullam tempore sit
          exercitationem dicta, nostrum ipsum ex possimus
          sapiente quia similique molestias! Reiciendis
          dolore, consequuntur porro voluptatum repellat
          minima aperiam dolorum, veniam iste a excepturi
          architecto, deserunt sit eligendi. Magnam
          voluptatibus tempora maxime, at atque, quidem
          temporibus mollitia cupiditate fuga iusto eos.
          Ipsa, veritatis temporibus earum reprehenderit,
          iure sunt itaque omnis non perferendis ducimus,
          fugiat quaerat officiis animi obcaecati. Molestiae
          id error debitis repellat in exercitationem
          laborum iure, quis incidunt quaerat eum fugiat
          reprehenderit porro quam? Esse fugit ab earum
          molestiae voluptate nemo rerum magnam dolore.
          Nihil, numquam incidunt. Et ab quidem suscipit
          quaerat similique molestiae amet est magni esse
          exercitationem quia delectus quasi harum natus
          omnis eum, velit ratione adipisci deserunt beatae
          quisquam, in eius doloremque. Totam, nesciunt. Ad,
          illum! Error, vero provident earum praesentium
          asperiores sequi minima placeat quo est. Id
          eveniet soluta ipsa dolor sunt repudiandae error
          repellendus, ab consequatur deleniti itaque qui
          natus commodi consequuntur! Culpa repellendus
          fugiat, reprehenderit optio quam, aliquid ratione
          eius ea non veritatis blanditiis assumenda! Quas
          necessitatibus nulla recusandae et vel a
          perferendis accusamus, enim temporibus quibusdam,
          esse asperiores debitis atque. Ex magni facere
          dolore, impedit, iste officiis aperiam obcaecati
          temporibus dignissimos nesciunt aliquid adipisci
          consequuntur. Tenetur architecto quia quaerat,
          illum repellendus expedita a reiciendis ab dolorum
          accusamus unde odio perferendis!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
