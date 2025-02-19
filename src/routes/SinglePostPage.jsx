import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            optio nisi.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            mollitia repellat quis nostrum consequatur iure et dicta, molestias
            quo temporibus numquam animi quasi iste. Repudiandae, commodi! Hic
            sed expedita nobis!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            quibusdam nam! Dolorum, natus iure. Ducimus sequi possimus, corporis
            quam id laudantium reprehenderit eligendi unde voluptatem similique
            modi quod. Maxime, obcaecati. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias quam, labore amet assumenda debitis
            veritatis illo possimus! Eveniet placeat illum at alias nulla
            deserunt consequatur eius? Voluptatum facilis natus architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            dolorem ducimus. Cupiditate molestiae magnam quis recusandae
            reiciendis et dolorum laboriosam aliquam exercitationem voluptatibus
            ullam laudantium eos nam, dolores doloremque blanditiis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Error vel voluptatibus
            dolorum itaque. Ullam incidunt minima veritatis aut quos id esse
            eaque omnis ex nulla harum, mollitia nam deleniti cupiditate!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            possimus quos soluta voluptatibus expedita, eius, enim et quia
            officiis a deserunt inventore ipsam consectetur commodi distinctio
            dignissimos, deleniti quaerat facilis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus animi quia reprehenderit
            mollitia, omnis eum veniam possimus debitis sunt ullam rem beatae
            iure nisi autem aspernatur, odio illum distinctio ipsam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ipsum accusamus modi
            eveniet aspernatur quo dolor, assumenda a porro. Voluptate dicta
            cumque voluptates ut mollitia iste libero molestias provident modi
            dolores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem nisi eligendi consequuntur delectus sed enim? Totam quisquam
            accusantium sed reprehenderit temporibus illo, sint qui quia
            eveniet, vero harum! Temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla doloremque repellendus unde
            velit ipsam deserunt nostrum ratione? Eveniet et ducimus dolore
            officiis repellat, nihil ipsa blanditiis, sit, ipsam quod sapiente?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
            maiores, ab magnam quae necessitatibus nihil dicta, porro facilis
            velit animi molestiae repudiandae nemo accusantium, similique
            ducimus. Voluptatem, rem placeat.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          {/* categories */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
