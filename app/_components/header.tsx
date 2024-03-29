import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between items-center">
        <Image src="/logo.png" height={22} width={128} alt="logo" />
        <Button variant="outline" size="icon" className="h-5 w-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
