import React from "react";

import { Button, Img, List, Slider, Text } from "components";

const IconsPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-9 w-full">
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[2309px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[2149px] mx-auto w-full">
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <Img
                    className="h-[31px] w-24"
                    src="images/img_logoctwhite1.svg"
                    alt="logoctwhiteOne"
                  />
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtNotoSansRegular24"
                    >
                      Style
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterRegular24"
                    >
                      <>-&gt;</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24Gray900"
                    >
                      Icons
                    </Text>
                  </div>
                </div>
                <a
                  href="www.creative-tim.com"
                  className="text-blue_gray-400 text-xl w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtInterRegular20">www.creative-tim.com</Text>
                </a>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[2149px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40"
                    >
                      Icons & Assets
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-lg w-full"
                    size="txtHelvetica18"
                  >
                    Icons and other assets used in the theme
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start max-w-[2148px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[84%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-end p-4 rounded-[5px] w-[16%] md:w-full">
                <div className="flex flex-col justify-start mt-6 w-full">
                  <div className="flex flex-row h-12 items-start justify-end md:ml-[0] ml-[168px] w-12">
                    <Img
                      className="h-6 mt-6 w-6"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Img
                      className="h-6 mb-6 w-6"
                      src="images/img_property1calendar.svg"
                      alt="property1calend"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-end ml-6 md:ml-[0] w-[90%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900_03_24x24.svg"
                      alt="arrowdown"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900_03_24x24.svg"
                      alt="arrowleft"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900_03_24x24.svg"
                      alt="arrowright_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900_03_24x24.svg"
                      alt="arrowup"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_property1chip.svg"
                      alt="property1chip"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_property1clipboard.svg"
                      alt="property1clipbo"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1clipboardlist.svg"
                        alt="property1clipbo_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1cloud.svg"
                        alt="property1cloud"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_24x24.svg"
                        alt="arrowdown_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_24x24.svg"
                        alt="arrowup_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_trash_gray_900_03.svg"
                        alt="trash_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1cog.svg"
                        alt="property1cog"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1collection.svg"
                        alt="property1collec"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1calendar.svg"
                        alt="property1credit"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_map.svg"
                        alt="map"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_gray_900_03.svg"
                        alt="settings_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1curr.svg"
                        alt="property1curr"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1currencydollar.svg"
                        alt="property1curren"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1currencyeuro.svg"
                        alt="property1curren_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1currencypound.svg"
                        alt="property1curren_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1currencyrupee.svg"
                        alt="property1curren_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_close.svg"
                        alt="close"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1database.svg"
                        alt="property1databa"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1devicemobile.svg"
                        alt="property1device"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1devicemobile.svg"
                        alt="property1device_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_gray_900_03.svg"
                        alt="file_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_gray_900_03_24x24.svg"
                        alt="file_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_24x24.svg"
                        alt="file_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_1.svg"
                        alt="file_Four"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_gray_900_03_24x24.svg"
                        alt="file_Five"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1documentsearch.svg"
                        alt="property1docume"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_gray_900_03.svg"
                        alt="file_Six"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dots.svg"
                        alt="property1dots"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dotshorizontal.svg"
                        alt="property1dotsho"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dotshorizontal.svg"
                        alt="property1dotsve"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_download.svg"
                        alt="download"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1duplicate.svg"
                        alt="property1duplic"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1emojihappy.svg"
                        alt="property1emojih"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1emojihappy.svg"
                        alt="property1emojis"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1exclamationcircle.svg"
                        alt="property1exclam"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_maximize.svg"
                        alt="maximize"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1eye.svg"
                        alt="property1eye"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1eyeoff.svg"
                        alt="property1eyeoff"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1film.svg"
                        alt="property1film"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_filter.svg"
                        alt="filter"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1fingerprint.svg"
                        alt="property1finger"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_fire.svg"
                        alt="fire"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_question.svg"
                        alt="question"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_television_gray_900_03.svg"
                        alt="television_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder_gray_900_03.svg"
                        alt="folder_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1gift.svg"
                        alt="property1gift"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1globe.svg"
                        alt="property1globe"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1globealt.svg"
                        alt="property1globea"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1hand.svg"
                        alt="property1hand"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1iconuserremove.svg"
                        alt="property1iconus"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1identification.svg"
                        alt="property1identi"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1inbox.svg"
                        alt="property1inbox"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_gray_900_03.svg"
                        alt="clock_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1informationcircle.svg"
                        alt="property1inform"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_trash_gray_900_03_24x24.svg"
                        alt="trash_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_lightbulb.svg"
                        alt="lightbulb"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_cursor.svg"
                        alt="cursor"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_link.svg"
                        alt="link"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1locationmarker.svg"
                        alt="property1locati"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1lockclosed.svg"
                        alt="property1lockcl"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1lockopen.svg"
                        alt="property1lockop"
                      />
                      <Img
                        className="cursor-pointer h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft_One"
                        onClick={() => sliderRef.current?.slidePrev?.()}
                      />
                      <Img
                        className="cursor-pointer h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft_Two"
                        onClick={() => sliderRef.current?.slideNext?.()}
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_mail_gray_900_03.svg"
                        alt="mail_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_map_gray_900_03.svg"
                        alt="map_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="property1menu"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="property1menual"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="property1menual_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="property1menual_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menualt4.svg"
                        alt="property1menual_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1microphone.svg"
                        alt="property1microp"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1minus.svg"
                        alt="property1minus"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1minuscircle.svg"
                        alt="property1minusc"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1minus.svg"
                        alt="property1minuss"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1moon.svg"
                        alt="property1moon"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_music.svg"
                        alt="music"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1newspaper.svg"
                        alt="property1newspa"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1officebuilding.svg"
                        alt="property1office"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_send.svg"
                        alt="send"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_link_gray_900_03.svg"
                        alt="link_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1exclamationcircle.svg"
                        alt="property1pause"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit_gray_900_03.svg"
                        alt="edit_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_call_gray_900_03.svg"
                        alt="call_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call_gray_900_03_24x24.svg"
                        alt="call_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_call_gray_900_03.svg"
                        alt="call_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1photograph.svg"
                        alt="property1photog"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1play.svg"
                        alt="property1play"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menualt4.svg"
                        alt="property1plus"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1pluscircle.svg"
                        alt="property1plusci"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1plussm.svg"
                        alt="property1plussm"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1pres.svg"
                        alt="property1pres"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1pres_gray_900_03.svg"
                        alt="property1pres_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1printer.svg"
                        alt="property1printe"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1puzzle.svg"
                        alt="property1puzzle"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1qrcode.svg"
                        alt="property1qrcode"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1ques.svg"
                        alt="property1ques"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_reply_gray_900_03.svg"
                        alt="reply_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1refresh.svg"
                        alt="property1refres"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft_gray_900_03.svg"
                        alt="arrowleft_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_rewind.svg"
                        alt="rewind_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1rss.svg"
                        alt="property1rss"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_Two"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume_gray_900_03.svg"
                        alt="volume_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_cut_gray_900_03.svg"
                        alt="cut_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1minuscircle.svg"
                        alt="search"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1server.svg"
                        alt="property1server"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_share.svg"
                        alt="share"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark_gray_900_03.svg"
                        alt="checkmark_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1shieldexclamation.svg"
                        alt="property1shield"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_cart.svg"
                        alt="cart"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1smviewgridadd.svg"
                        alt="property1smview"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_upload.svg"
                        alt="upload_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane_gray_900_03.svg"
                        alt="airplane_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1statusoffline.svg"
                        alt="property1status"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1statusonline.svg"
                        alt="property1status_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1stop.svg"
                        alt="property1stop"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_brightness.svg"
                        alt="brightness"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_search_gray_900_03_24x24.svg"
                        alt="search_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_upload.svg"
                        alt="upload_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_upload.svg"
                        alt="upload_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1table.svg"
                        alt="property1table"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1template.svg"
                        alt="property1templa"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_gray_900_03_24x24.svg"
                        alt="clock_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_music_gray_900_03.svg"
                        alt="music_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1ticket.svg"
                        alt="property1ticket"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_cut_gray_900_03_24x24.svg"
                        alt="cut_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_trash_24x24.svg"
                        alt="trash_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1trendingdown.svg"
                        alt="property1trendi"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1trendingdown.svg"
                        alt="property1trendi_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_music_gray_900_03_24x24.svg"
                        alt="music_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_download.svg"
                        alt="download_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1user.svg"
                        alt="property1user"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1useradd.svg"
                        alt="property1userad"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1usercircle.svg"
                        alt="property1userci"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1usergroup.svg"
                        alt="property1usergr"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_search_24x24.svg"
                        alt="search_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_cut_24x24.svg"
                        alt="cut_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_videocamera.svg"
                        alt="videocamera"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1viewboards.svg"
                        alt="property1viewbo"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1viewgrid.svg"
                        alt="property1viewgr"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1plussm.svg"
                        alt="property1viewli"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume_gray_900_03_24x24.svg"
                        alt="volume_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume_24x24.svg"
                        alt="volume_Three"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1wifi.svg"
                        alt="property1wifi"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menualt4.svg"
                        alt="arrowright_Four"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_search_1.svg"
                        alt="search_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1exclamationcircle.svg"
                        alt="search_Four"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_mail_gray_900_03_24x24.svg"
                        alt="mail_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1adjustments.svg"
                        alt="property1adjust"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_2.svg"
                        alt="file_Seven"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1archive_gray_900_03.svg"
                        alt="property1archiv"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dots.svg"
                        alt="arrowdown_Three"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-3/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dots.svg"
                        alt="arrowleft_Four"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dots.svg"
                        alt="arrowright_Five"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1dots.svg"
                        alt="arrowup_Three"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="arrowdown_Four"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="arrowleft_Five"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_property1menu_gray_900_03.svg"
                        alt="arrowdown_Five"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start md:ml-[0] ml-[37px] p-4 rounded-[5px] w-[13%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-2 w-full">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrown"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrown_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrown_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="arrowright"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrowsexpand.svg"
                        alt="property1arrows"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrowu"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1atsymbol.svg"
                        alt="property1atsymb"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1backspace.svg"
                        alt="property1backsp"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_gray_900_03_20x20.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1ban.svg"
                        alt="property1ban"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1beaker.svg"
                        alt="property1beaker"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1bell.svg"
                        alt="property1bell"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1bookmark.svg"
                        alt="property1bookma"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1bookmarkalt.svg"
                        alt="property1bookma_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1bookopen.svg"
                        alt="property1bookop"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1briefcase.svg"
                        alt="property1briefc"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1cake.svg"
                        alt="property1cake"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1calendar_gray_900_03.svg"
                        alt="property1calend"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1camera.svg"
                        alt="property1camera"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1cash.svg"
                        alt="property1cash"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1chartpie.svg"
                        alt="property1chartp"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1chartsquarebar.svg"
                        alt="property1charts"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1chat.svg"
                        alt="property1chat"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1chatalt.svg"
                        alt="property1chatal"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1chatalt2.svg"
                        alt="property1chatal_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_20x20.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_1.svg"
                        alt="checkmark_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03.svg"
                        alt="arrowdown"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03.svg"
                        alt="arrowdown_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright_gray_900_03.svg"
                        alt="arrowright"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03.svg"
                        alt="arrowdown"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03_20x20.svg"
                        alt="arrowdown_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03_20x20.svg"
                        alt="arrowleft"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03_20x20.svg"
                        alt="arrowright_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03_20x20.svg"
                        alt="arrowup"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_2.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_trash_gray_900_03_20x20.svg"
                        alt="trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1clipboardlist_gray_900_03.svg"
                        alt="property1clipbo"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock_gray_900_03_20x20.svg"
                        alt="clock"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1cloud_gray_900_03.svg"
                        alt="property1cloud"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1clouddownload.svg"
                        alt="property1cloudd"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_upload_gray_900_03.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_trash_20x20.svg"
                        alt="trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1gear.svg"
                        alt="property1gear"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1colorswatch.svg"
                        alt="property1colors"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_car_gray_900_03.svg"
                        alt="car"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_mail_gray_900_03_20x20.svg"
                        alt="mail"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1cubetransparent.svg"
                        alt="property1cubetr"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1curr_gray_900_03.svg"
                        alt="property1curr"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1currencydollar_gray_900_03.svg"
                        alt="property1curren"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1currencyeuro_gray_900_03.svg"
                        alt="property1curren_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1currencypound_gray_900_03.svg"
                        alt="property1curren_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1currencyrupee_gray_900_03.svg"
                        alt="property1curren_Three"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_search_gray_900_03_20x20.svg"
                        alt="search"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1cursorclick.svg"
                        alt="property1cursor"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1database_gray_900_03.svg"
                        alt="property1databa"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1desktopcomputer.svg"
                        alt="property1deskto"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1devicemobile_gray_900_03.svg"
                        alt="property1device"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1document.svg"
                        alt="property1docume"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documentadd.svg"
                        alt="property1docume_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documentdownload.svg"
                        alt="property1docume_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_videocamera_gray_900_03.svg"
                        alt="videocamera"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documentremove.svg"
                        alt="property1docume_Three"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documentreport.svg"
                        alt="property1docume_Four"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documentsearch_gray_900_03.svg"
                        alt="property1docume_Five"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1documenttext.svg"
                        alt="property1docume_Six"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1dots_gray_900_03.svg"
                        alt="property1dots"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_user_gray_900_03.svg"
                        alt="user"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_user_gray_900_03.svg"
                        alt="user_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1download.svg"
                        alt="property1downlo"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_cart_gray_900_03.svg"
                        alt="cart"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_file_gray_900_03_20x20.svg"
                        alt="file"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1emojihappy_gray_900_03.svg"
                        alt="property1emojih"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1emojihappy_gray_900_03.svg"
                        alt="property1emojis"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1exclamation.svg"
                        alt="property1exclam"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1exclamationcircle_gray_900_03.svg"
                        alt="property1exclam_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1externallink.svg"
                        alt="property1extern"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1eye_gray_900_03.svg"
                        alt="property1eye"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1fastforward.svg"
                        alt="property1fastfo"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1film_gray_900_03.svg"
                        alt="property1film"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1filter.svg"
                        alt="property1filter"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1fingerprint_gray_900_03.svg"
                        alt="property1finger"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1fire.svg"
                        alt="property1fire"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1flag.svg"
                        alt="property1flag"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1folder.svg"
                        alt="property1folder"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1folderadd.svg"
                        alt="property1folder_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1folderdownload.svg"
                        alt="property1folder"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1folderopen.svg"
                        alt="property1folder_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1folderremove.svg"
                        alt="property1folder_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1gift_gray_900_03.svg"
                        alt="property1gift"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1globe_gray_900_03.svg"
                        alt="property1globe"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1globealt_gray_900_03.svg"
                        alt="property1globea"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1hand_gray_900_03.svg"
                        alt="property1hand"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_grid_gray_900_03.svg"
                        alt="grid"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1heart.svg"
                        alt="property1heart"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1home.svg"
                        alt="property1home"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ticket_gray_900_03.svg"
                        alt="ticket"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1identification_gray_900_03.svg"
                        alt="property1identi"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1inboxin.svg"
                        alt="property1inboxi"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1informationcircle_gray_900_03.svg"
                        alt="property1inform"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1key.svg"
                        alt="property1key"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_lightbulb_gray_900_03.svg"
                        alt="lightbulb"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1lightningbolt.svg"
                        alt="property1lightn"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1link.svg"
                        alt="property1link"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1locationmarker_gray_900_03.svg"
                        alt="property1locati"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1lockclosed_gray_900_03.svg"
                        alt="property1lockcl"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1lockopen_gray_900_03.svg"
                        alt="property1lockop"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1download.svg"
                        alt="property1logout"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_sort.svg"
                        alt="sort"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1mail.svg"
                        alt="property1mail"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1devicemobile_gray_900_03.svg"
                        alt="property1mailOne"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_3.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1map.svg"
                        alt="property1map"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1mdlibrary.svg"
                        alt="property1mdlibr"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_gray_900_03.svg"
                        alt="menu"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_gray_900_03.svg"
                        alt="menu"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_gray_900_03.svg"
                        alt="menu_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_gray_900_03.svg"
                        alt="menu_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_gray_900_03_20x20.svg"
                        alt="menu_Three"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_microphone.svg"
                        alt="microphone"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1minus_gray_900_03.svg"
                        alt="property1minus"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1minuscircle_gray_900_03.svg"
                        alt="property1minusc"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1minus_gray_900_03.svg"
                        alt="property1minuss"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1moon_gray_900_03.svg"
                        alt="property1moon"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1musicnote.svg"
                        alt="property1musicn"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1newspaper_gray_900_03.svg"
                        alt="property1newspa"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1officebuilding_gray_900_03.svg"
                        alt="property1office"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1paperairplane.svg"
                        alt="property1papera"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1paperclip.svg"
                        alt="property1paperc"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pause.svg"
                        alt="property1pause"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pencil.svg"
                        alt="property1pencil"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_edit_gray_900_03_20x20.svg"
                        alt="edit"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1phone.svg"
                        alt="property1phone"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1phoneincoming.svg"
                        alt="property1phonei"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1phonemissedcall.svg"
                        alt="property1phonem"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1phoneoutgoing.svg"
                        alt="property1phoneo"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1bookmarkalt.svg"
                        alt="property1photog"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1play_gray_900_03.svg"
                        alt="property1play"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1plus.svg"
                        alt="property1plus"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pluscircle_gray_900_03.svg"
                        alt="property1plusci"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1plus.svg"
                        alt="property1plussm"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pres_gray_900_03_20x20.svg"
                        alt="property1pres"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pres_20x20.svg"
                        alt="property1pres_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1printer_gray_900_03.svg"
                        alt="property1printe"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1puzzle_gray_900_03.svg"
                        alt="property1puzzle"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1qrcode_gray_900_03.svg"
                        alt="property1qrcode"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1ques_gray_900_03.svg"
                        alt="property1ques"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1receiptrefund.svg"
                        alt="property1receip"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_computer_gray_900_03.svg"
                        alt="computer"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1refresh_gray_900_03.svg"
                        alt="property1refres"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1reply.svg"
                        alt="property1reply"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1rewind.svg"
                        alt="property1rewind"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1rss_gray_900_03.svg"
                        alt="property1rss"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_download_gray_900_03.svg"
                        alt="download"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_download_gray_900_03_20x20.svg"
                        alt="download_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1scale.svg"
                        alt="property1scale"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1scissors.svg"
                        alt="property1scisso"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_search_20x20.svg"
                        alt="search"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1searchcircle.svg"
                        alt="property1search"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1server_gray_900_03.svg"
                        alt="property1server"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_share_gray_900_03.svg"
                        alt="share"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_4.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1shieldexclamation_gray_900_03.svg"
                        alt="property1shield"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1shoppingbag.svg"
                        alt="property1shoppi"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_upload_gray_900_03_20x20.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_upload_gray_900_03_20x20.svg"
                        alt="upload_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1sparkles.svg"
                        alt="property1sparkl"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1speakerphone.svg"
                        alt="property1speake"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1star.svg"
                        alt="property1star"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1statusoffline_gray_900_03.svg"
                        alt="property1status"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1statusonline_gray_900_03.svg"
                        alt="property1status_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1stop_gray_900_03.svg"
                        alt="property1stop"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1sun.svg"
                        alt="property1sun"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1support.svg"
                        alt="property1suppor"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1switchhorizontal.svg"
                        alt="property1switch"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1switchhorizontal.svg"
                        alt="property1switch_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1table_gray_900_03.svg"
                        alt="property1table"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1table1.svg"
                        alt="property1tableOne"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1tag.svg"
                        alt="property1tag"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright_gray_900_03_20x20.svg"
                        alt="arrowright"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1thumbdown.svg"
                        alt="property1thumbd"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1thumbdown.svg"
                        alt="property1thumbu"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1ticket_gray_900_03.svg"
                        alt="property1ticket"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1translate.svg"
                        alt="property1transl"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1trash.svg"
                        alt="property1trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1trendingdown_gray_900_03.svg"
                        alt="property1trendi"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1trendingdown_gray_900_03.svg"
                        alt="property1trendi_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1truck.svg"
                        alt="property1truck"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1upload.svg"
                        alt="property1upload"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1user_gray_900_03.svg"
                        alt="property1user"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1useradd_gray_900_03.svg"
                        alt="property1userad"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1usercircle_gray_900_03.svg"
                        alt="property1userci"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_user_gray_900_03_20x20.svg"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1userremove.svg"
                        alt="property1userre"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_user_20x20.svg"
                        alt="user"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1variable.svg"
                        alt="property1variab"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_videocamera_gray_900_03_20x20.svg"
                        alt="videocamera"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_grid_gray_900_03_20x20.svg"
                        alt="grid"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_grid_20x20.svg"
                        alt="grid_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1viewlist.svg"
                        alt="property1viewli"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1volumeoff.svg"
                        alt="property1volume"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1volumeup.svg"
                        alt="property1volume_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1wifi_gray_900_03.svg"
                        alt="property1wifi"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1plus.svg"
                        alt="property1x"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1pluscircle_gray_900_03.svg"
                        alt="property1xcircl"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_search_gray_900_03.svg"
                        alt="search_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1academiccap.svg"
                        alt="property1academ"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1adjustments_gray_900_03.svg"
                        alt="property1adjust"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1annotation.svg"
                        alt="property1annota"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1archive.svg"
                        alt="property1archiv"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrowcircledown.svg"
                        alt="property1arrowc"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-row items-start justify-start mr-[38px] my-0 w-[81%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrowcircleleft.svg"
                        alt="property1arrowc"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrowcircleright.svg"
                        alt="property1arrowc_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrowcircleup.svg"
                        alt="property1arrowc_Two"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrowd"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="arrowleft"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_property1arrownarrowleft.svg"
                        alt="property1arrown"
                      />
                      <div className="h-6 ml-[3px] relative w-1/4">
                        <Img
                          className="absolute bottom-[0] h-5 left-[0] w-5"
                          src="images/img_checkmark_green_a700_01.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                          src="images/img_dashboard.svg"
                          alt="dashboard"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] w-[69%] md:w-full">
                    <Img
                      className="h-4 mt-[5px] w-4"
                      src="images/img_property1menu.svg"
                      alt="property1menu_One"
                    />
                    <Img
                      className="h-4 ml-0.5 mt-[5px] w-4"
                      src="images/img_property1menu_blue_gray_100.svg"
                      alt="property1menu_Two"
                    />
                    <Img
                      className="h-4 ml-1 mt-[3px] w-4"
                      src="images/img_property1basket.svg"
                      alt="property1basket"
                    />
                    <Img
                      className="h-4 ml-[17px]"
                      src="images/img_property1star_blue_gray_500.svg"
                      alt="property1star"
                    />
                    <Img
                      className="h-4 ml-2"
                      src="images/img_airplane_blue_gray_500.svg"
                      alt="airplane_Two"
                    />
                    <div className="bg-blue_gray-50 flex flex-col h-[18px] items-center justify-start mb-[3px] ml-[11px] p-0.5 w-[18px]">
                      <Img
                        className="h-[13px]"
                        src="images/img_minimize.svg"
                        alt="minimize"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[38px] items-start justify-start md:ml-[0] ml-[35px] w-[68%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-4 rounded-[5px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-end w-[57%] md:w-full">
                        <Button
                          className="flex h-12 items-center justify-center rounded w-12"
                          shape="round"
                          color="pink_500"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_shape.svg" alt="shape" />
                        </Button>
                        <Img
                          className="h-12 md:h-auto ml-[41px] object-cover w-12"
                          src="images/img_property1logojira.png"
                          alt="property1logoji"
                        />
                        <Img
                          className="h-[43px] ml-[39px]"
                          src="images/img_arrowdown_amber_600.svg"
                          alt="arrowdown_Six"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-[98%] md:w-full">
                        <Img
                          className="h-12 sm:mt-0 mt-[5px] w-12"
                          src="images/img_grid_pink_600.svg"
                          alt="grid_One"
                        />
                        <Img
                          className="h-12 ml-10 sm:ml-[0] sm:mt-0 mt-[5px] w-12"
                          src="images/img_signal_green_500.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-8 ml-56 sm:ml-[0] w-8"
                          src="images/img_signal_light_blue_900.svg"
                          alt="signal_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[47px] items-start justify-end mt-1 w-[53%] md:w-full">
                        <Img
                          className="h-9 mt-[21px] w-9"
                          src="images/img_property1google.svg"
                          alt="property1google"
                        />
                        <Img
                          className="h-12 mt-[21px] w-12"
                          src="images/img_property1apple.svg"
                          alt="property1apple"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_volume_yellow_800_02.svg"
                          alt="volume_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <List
                    className="border border-dashed border-deep_purple-A200_01 sm:flex-col flex-row gap-4 grid grid-cols-5 p-5 rounded-[5px]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-full"
                        src="images/img_gb.png"
                        alt="gb"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-full"
                        src="images/img_us.png"
                        alt="us"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-full"
                        src="images/img_au.png"
                        alt="au"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-full"
                        src="images/img_br.png"
                        alt="br"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-full"
                        src="images/img_de.png"
                        alt="de"
                      />
                    </div>
                  </List>
                  <Img
                    className="h-12 md:mt-0 mt-0.5 rounded-[5px]"
                    src="images/img_socialicons.svg"
                    alt="socialicons"
                  />
                  <div className="border border-dashed border-deep_purple-A200_01 flex flex-row items-start justify-start md:mt-0 mt-[3px] p-4 rounded-[5px]">
                    <Img
                      className="h-2 w-2"
                      src="images/img_close_white_a700.svg"
                      alt="close_One"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-[21px] w-3.5"
                      src="images/img_property1svgexport8.svg"
                      alt="property1svgexp"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_menu_blue_gray_400.svg"
                      alt="menu"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_property1svgexport6.svg"
                      alt="property1svgexp_One"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_property1svgexport5.svg"
                      alt="property1svgexp_Two"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_property1svgexport4.svg"
                      alt="property1svgexp_Three"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_info_blue_gray_400.svg"
                      alt="info_One"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_property1svgexport2.svg"
                      alt="property1svgexp_Four"
                    />
                    <Img
                      className="h-3.5 mb-[7px] ml-3 w-3.5"
                      src="images/img_property1svgexport1.svg"
                      alt="property1svgexp_Five"
                    />
                  </div>
                </div>
                <Slider
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="border border-dashed border-deep_purple-A200_01 rounded-[5px] w-[93%]"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col items-center justify-start mx-2.5">
                        <List
                          className="flex flex-col gap-4 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex-1 gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 w-full">
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_image14.png"
                                alt="imageFourteen"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_logopricingnasa.png"
                                alt="logopricingnasa"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_logopricingnetflix.png"
                                alt="logopricingnetf"
                              />
                            </div>
                          </div>
                          <div className="flex-1 gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 w-full">
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_logopricingpinterest.png"
                                alt="logopricingpint"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_logopricingspotify.png"
                                alt="logopricingspot"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Img
                                className="h-[92px] md:h-auto object-cover w-full"
                                src="images/img_image19.png"
                                alt="imageNineteen"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
              <List
                className="border border-dashed border-deep_purple-A200_01 md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 p-4 rounded-[5px] w-[48%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_1.png"
                    alt="One"
                  />
                </div>
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_2_150x150.png"
                    alt="Two"
                  />
                </div>
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_3.png"
                    alt="Three"
                  />
                </div>
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_4.png"
                    alt="Four"
                  />
                </div>
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_5.png"
                    alt="Five"
                  />
                </div>
                <div className="flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_6.png"
                    alt="Six"
                  />
                </div>
              </List>
              <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-end p-[22px] sm:px-5 rounded-[5px] w-[52%] md:w-full">
                <Img
                  className="h-[72px] mb-6 md:mt-0 mt-2.5"
                  src="images/img_property1light.svg"
                  alt="property1light"
                />
                <Img
                  className="h-[72px] mb-[26px] md:ml-[0] ml-[91px] md:mt-0 mt-2"
                  src="images/img_property1airconditioner.svg"
                  alt="property1aircon"
                />
                <Img
                  className="h-[72px] mb-[27px] md:ml-[0] ml-[104px] md:mt-0 mt-[7px]"
                  src="images/img_property1humidity.svg"
                  alt="property1humidi"
                />
                <Img
                  className="h-[72px] mb-8 md:ml-[0] ml-[107px] md:mt-0 mt-0.5"
                  src="images/img_property1wifi_white_a700.svg"
                  alt="property1wifi_One"
                />
                <Img
                  className="h-[60px] md:ml-[0] ml-[115px] md:mt-0 mt-[3px]"
                  src="images/img_lightbulb_white_a700.svg"
                  alt="lightbulb_One"
                />
                <Img
                  className="h-11 md:h-auto md:ml-[0] ml-[15px] md:mt-0 mt-[11px] object-cover w-11"
                  src="images/img_bulb63.png"
                  alt="bulbSixtyThree"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsPage;
