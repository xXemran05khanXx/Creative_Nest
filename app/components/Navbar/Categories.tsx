"use client";
import React from "react";
import { Container } from "../MultiPurpose/Container";
import {  FaPodcast, FaGamepad } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import { MdOutlineCamera,  MdMusicNote, MdOutlineEvent } from "react-icons/md";
import { GiPaintBrush } from "react-icons/gi";
import { CategoryBox } from "../CategoryBox";
import { SiAdobephotoshop } from "react-icons/si";
import { usePathname, useSearchParams } from "next/navigation";

type CategoriesProps = {};
export const categories = [
    {
        label: 'Photography',
        icon: MdOutlineCamera ,
        description: 'A studio equipped for professional photography sessions'
    },
    {
        label: 'Film',
        icon: PiFilmSlateFill ,
        description: 'A space designed for video production, filming, and editing'
    },
    {
        label: 'Podcast',
        icon: FaPodcast,
        description: 'A soundproof studio for podcast recording with quality audio equipment'
    },
    {
        label: 'Music',
        icon: MdMusicNote  ,
        description: 'A studio for recording and mixing music with professional sound equipment'
    },
    {
        label: 'Art',
        icon: GiPaintBrush,
        description: 'A creative space for artists to work on painting, sculpting, or drawing'
    },
    {
        label: 'Design',
        icon: SiAdobephotoshop,
        description: 'A studio with tools for fashion design, sewing, and prototyping'
    },
    {
        label: 'Event Space',
        icon: MdOutlineEvent,
        description: 'A flexible studio space for hosting events, workshops, or classes'
    },
    {
        label: 'Gamming',
        icon: FaGamepad ,
        description: 'A high-tech studio for Gamming content creation and virtual productions'
    }
];
export const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-1 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((c) => (
          <CategoryBox
            key={c.label}
            label={c.label}
            icon={c.icon}
            selected={category === c.label}
          />
        ))}
      </div>
    </Container>
  );
};
