import React from "react";
import Image from "next/image";
import us from "../public/flag/us.jpg";
import cn from "../public/flag/cn.jpg";
import jp from "../public/flag/jp.jpg";
import gb from "../public/flag/gb.jpg";
import roc from "../public/flag/roc.png";
import au from "../public/flag/au.jpg";
import nl from "../public/flag/nl.jpg";
import fr from "../public/flag/fr.jpg";
import de from "../public/flag/de.jpg";
import it from "../public/flag/it.jpg";
import ca from "../public/flag/ca.jpg";
import br from "../public/flag/br.jpg";
import nz from "../public/flag/nz.jpg";
import cu from "../public/flag/cu.jpg";
import hu from "../public/flag/hu.jpg";
import rok from "../public/flag/rok.png";
import pl from "../public/flag/pl.jpg";
import czr from "../public/flag/czr.png";
import ke from "../public/flag/ke.jpg";
import no from "../public/flag/no.jpg";
import jm from "../public/flag/jm.jpg";
import es from "../public/flag/es.jpg";
import se from "../public/flag/se.jpg";
import ch from "../public/flag/ch.jpg";
import dk from "../public/flag/dk.jpg";
import hr from "../public/flag/hr.jpg";
import ir from "../public/flag/ir.jpg";
import rs from "../public/flag/rs.jpg";
import be from "../public/flag/be.jpg";
import bg from "../public/flag/bg.jpg";
import si from "../public/flag/si.jpg";
import uz from "../public/flag/uz.jpg";
import ge from "../public/flag/ge.jpg";
import cht from "../public/flag/cht.png";
import tr from "../public/flag/tr.jpg";
import gr from "../public/flag/gr.jpg";
import ug from "../public/flag/ug.jpg";
import ec from "../public/flag/ec.jpg";
import ie from "../public/flag/ie.jpg";
import il from "../public/flag/il.jpg";
import qa from "../public/flag/qa.jpg";
import bs from "../public/flag/bs.jpg";
import xk from "../public/flag/xk.jpg";
import ua from "../public/flag/ua.jpg";
import by from "../public/flag/by.jpg";
import ro from "../public/flag/ro.jpg";
import ve from "../public/flag/ve.jpg";
import hk from "../public/flag/hk.jpg";
import ph from "../public/flag/ph.jpg";
import sk from "../public/flag/sk.jpg";
import ind from "../public/flag/india.jpg";
import { useRouter } from "next/router";
import { useState } from "react";

const all_country_flag = ({ title }) => {
  const router = useRouter();
  const [country, setNation] = useState("");

  const handle = (event) => {
    setNation(event.target.value);
    const href = `/nation_player/${event.target.value}?second=${title}`;
    // console.log(href)
    router.push(href);
  };

  return (
    <section className="outerbox" value={country}>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={us} />
        <button onClick={handle} className="btn" value="USA"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={cn} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={jp} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={gb} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={roc} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={au} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={nl} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={fr} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={de} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={it} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ca} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={br} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={nz} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={cu} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={hu} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={rok} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={pl} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={czr} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ke} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={no} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ind} />
        <button onClick={handle} className="btn" value="IND"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={jm} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={es} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={se} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ch} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={dk} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={hr} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ir} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={rs} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={be} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={bg} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={si} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={uz} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ge} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={cht} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={tr} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={gr} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ug} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ec} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ie} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={il} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={qa} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={bs} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={xk} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ua} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={by} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ro} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ve} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={hk} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={ph} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
      <div className="innereb">
        <Image alt="alternative text" className="flag" src={sk} />
        <button onClick={handle} className="btn" value="us"></button>
      </div>
    </section>
  );
};

export default all_country_flag;
