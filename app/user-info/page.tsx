
import { auth} from '@/auth';
import  Image from 'next/image'


export default   async function  UserInfo(){
     const session = await auth();
    
      if (session?.user) {
        return (
          <div className="p-8 m-8">
            <fieldset className="border-1 rounded-xl p-8 ">
              <legend className="text-gray-500 px-2"> Next js githubAuth </legend>
              <p className="">
                Welcome to hawawii,{" "}
                <span className="font-semibold text-orange-500">
                  @{session.user.name}
                </span>
              </p>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? "Avatar"}
                  width={40}
                  height={40}
                  style={{borderRadius:"50%"}}
                  className=""
                />
              )}
            </fieldset>
          </div>
        );
      }
    
}