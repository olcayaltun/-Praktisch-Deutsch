"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const konnektorenData = [
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "weil",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich bleibe zu Hause",
        nebensatz: "weil ich krank bin",
        beispiel: "Ich bleibe zu Hause, weil ich krank bin.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich blieb zu Hause",
        nebensatz: "weil ich krank war",
        beispiel: "Ich blieb zu Hause, weil ich krank war.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich bin zu Hause geblieben",
        nebensatz: "weil ich krank gewesen bin",
        beispiel: "Ich bin zu Hause geblieben, weil ich krank gewesen bin.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich war zu Hause geblieben",
        nebensatz: "weil ich krank gewesen war",
        beispiel: "Ich war zu Hause geblieben, weil ich krank gewesen war.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde zu Hause bleiben",
        nebensatz: "weil ich krank sein werde",
        beispiel: "Ich werde zu Hause bleiben, weil ich krank sein werde.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde zu Hause geblieben sein",
        nebensatz: "weil ich krank gewesen sein werde",
        beispiel:
          "Ich werde zu Hause geblieben sein, weil ich krank gewesen sein werde.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde zu Hause bleiben",
        nebensatz: "weil ich krank wäre",
        beispiel: "Ich würde zu Hause bleiben, weil ich krank wäre.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "Er sagt, er bleibe zu Hause",
        nebensatz: "weil er krank sei",
        beispiel: "Er sagt, er bleibe zu Hause, weil er krank sei.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "da",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "bleiben wir drinnen",
        nebensatz: "da es regnet",
        beispiel: "Da es regnet, bleiben wir drinnen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "blieben wir drinnen",
        nebensatz: "da es regnete",
        beispiel: "Da es regnete, blieben wir drinnen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "sind wir drinnen geblieben",
        nebensatz: "da es geregnet hat",
        beispiel: "Da es geregnet hat, sind wir drinnen geblieben.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "waren wir drinnen geblieben",
        nebensatz: "da es geregnet hatte",
        beispiel: "Da es geregnet hatte, waren wir drinnen geblieben.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir drinnen bleiben",
        nebensatz: "da es regnen wird",
        beispiel: "Da es regnen wird, werden wir drinnen bleiben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir drinnen geblieben sein",
        nebensatz: "da es geregnet haben wird",
        beispiel:
          "Da es geregnet haben wird, werden wir drinnen geblieben sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würden wir drinnen bleiben",
        nebensatz: "da es regnen würde",
        beispiel: "Da es regnen würde, würden wir drinnen bleiben.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "bleibe man drinnen",
        nebensatz: "da es regne",
        beispiel: "Er sagt, da es regne, bleibe man drinnen.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "denn",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich lerne Deutsch",
        nebensatz: "denn ich möchte in Deutschland arbeiten",
        beispiel: "Ich lerne Deutsch, denn ich möchte in Deutschland arbeiten.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich lernte Deutsch",
        nebensatz: "denn ich wollte in Deutschland arbeiten",
        beispiel:
          "Ich lernte Deutsch, denn ich wollte in Deutschland arbeiten.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe Deutsch gelernt",
        nebensatz: "denn ich habe in Deutschland arbeiten wollen",
        beispiel:
          "Ich habe Deutsch gelernt, denn ich habe in Deutschland arbeiten wollen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte Deutsch gelernt",
        nebensatz: "denn ich hatte in Deutschland arbeiten wollen",
        beispiel:
          "Ich hatte Deutsch gelernt, denn ich hatte in Deutschland arbeiten wollen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde Deutsch lernen",
        nebensatz: "denn ich werde in Deutschland arbeiten wollen",
        beispiel:
          "Ich werde Deutsch lernen, denn ich werde in Deutschland arbeiten wollen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde Deutsch gelernt haben",
        nebensatz: "denn ich werde in Deutschland gearbeitet haben wollen",
        beispiel:
          "Ich werde Deutsch gelernt haben, denn ich werde in Deutschland gearbeitet haben wollen.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde Deutsch lernen",
        nebensatz: "denn ich würde gern in Deutschland arbeiten",
        beispiel:
          "Ich würde Deutsch lernen, denn ich würde gern in Deutschland arbeiten.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "Sie sagt, sie lerne Deutsch",
        nebensatz: "denn sie wolle in Deutschland arbeiten",
        beispiel:
          "Sie sagt, sie lerne Deutsch, denn sie wolle in Deutschland arbeiten.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "deshalb",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "ziehe ich eine Jacke an",
        nebensatz: "deshalb",
        beispiel: "Es ist kalt, deshalb ziehe ich eine Jacke an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "zog ich eine Jacke an",
        nebensatz: "deshalb",
        beispiel: "Es war kalt, deshalb zog ich eine Jacke an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich eine Jacke angezogen",
        nebensatz: "deshalb",
        beispiel: "Es war kalt, deshalb habe ich eine Jacke angezogen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich eine Jacke angezogen",
        nebensatz: "deshalb",
        beispiel:
          "Es war kalt gewesen, deshalb hatte ich eine Jacke angezogen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich eine Jacke anziehen",
        nebensatz: "deshalb",
        beispiel: "Es wird kalt sein, deshalb werde ich eine Jacke anziehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich eine Jacke angezogen haben",
        nebensatz: "deshalb",
        beispiel:
          "Es wird kalt gewesen sein, deshalb werde ich eine Jacke angezogen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich eine Jacke anziehen",
        nebensatz: "deshalb",
        beispiel: "Es wäre kalt, deshalb würde ich eine Jacke anziehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "ziehe er eine Jacke an",
        nebensatz: "deshalb",
        beispiel: "Er sagt, es sei kalt, deshalb ziehe er eine Jacke an.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "deswegen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "kann ich nicht kommen",
        nebensatz: "deswegen",
        beispiel: "Ich habe keine Zeit, deswegen kann ich nicht kommen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "konnte ich nicht kommen",
        nebensatz: "deswegen",
        beispiel: "Ich hatte keine Zeit, deswegen konnte ich nicht kommen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich nicht kommen können",
        nebensatz: "deswegen",
        beispiel:
          "Ich habe keine Zeit gehabt, deswegen habe ich nicht kommen können.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich nicht kommen können",
        nebensatz: "deswegen",
        beispiel:
          "Ich hatte keine Zeit gehabt, deswegen hatte ich nicht kommen können.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich nicht kommen können",
        nebensatz: "deswegen",
        beispiel:
          "Ich werde keine Zeit haben, deswegen werde ich nicht kommen können.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich nicht gekommen sein können",
        nebensatz: "deswegen",
        beispiel:
          "Ich werde keine Zeit gehabt haben, deswegen werde ich nicht gekommen sein können.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "könnte ich nicht kommen",
        nebensatz: "deswegen",
        beispiel: "Ich hätte keine Zeit, deswegen könnte ich nicht kommen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "könne sie nicht kommen",
        nebensatz: "deswegen",
        beispiel:
          "Sie sagt, sie habe keine Zeit, deswegen könne sie nicht kommen.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "daher",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "geht er früh schlafen",
        nebensatz: "daher",
        beispiel: "Er ist müde, daher geht er früh schlafen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "ging er früh schlafen",
        nebensatz: "daher",
        beispiel: "Er war müde, daher ging er früh schlafen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "ist er früh schlafen gegangen",
        nebensatz: "daher",
        beispiel: "Er ist müde gewesen, daher ist er früh schlafen gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war er früh schlafen gegangen",
        nebensatz: "daher",
        beispiel: "Er war müde gewesen, daher war er früh schlafen gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "wird er früh schlafen gehen",
        nebensatz: "daher",
        beispiel: "Er wird müde sein, daher wird er früh schlafen gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "wird er früh schlafen gegangen sein",
        nebensatz: "daher",
        beispiel:
          "Er wird müde gewesen sein, daher wird er früh schlafen gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde er früh schlafen gehen",
        nebensatz: "daher",
        beispiel: "Er wäre müde, daher würde er früh schlafen gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "gehe er früh schlafen",
        nebensatz: "daher",
        beispiel: "Er sagt, er sei müde, daher gehe er früh schlafen.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "darum",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "gehe ich essen",
        nebensatz: "darum",
        beispiel: "Ich habe Hunger, darum gehe ich essen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "ging ich essen",
        nebensatz: "darum",
        beispiel: "Ich hatte Hunger, darum ging ich essen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "bin ich essen gegangen",
        nebensatz: "darum",
        beispiel: "Ich habe Hunger gehabt, darum bin ich essen gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war ich essen gegangen",
        nebensatz: "darum",
        beispiel: "Ich hatte Hunger gehabt, darum war ich essen gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich essen gehen",
        nebensatz: "darum",
        beispiel: "Ich werde Hunger haben, darum werde ich essen gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich essen gegangen sein",
        nebensatz: "darum",
        beispiel:
          "Ich werde Hunger gehabt haben, darum werde ich essen gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich essen gehen",
        nebensatz: "darum",
        beispiel: "Ich hätte Hunger, darum würde ich essen gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "gehe er essen",
        nebensatz: "darum",
        beispiel: "Er sagt, er habe Hunger, darum gehe er essen.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "aus diesem Grund",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "muss ich absagen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund muss ich absagen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "musste ich absagen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund musste ich absagen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich absagen müssen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund habe ich absagen müssen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich absagen müssen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund hatte ich absagen müssen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich absagen müssen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund werde ich absagen müssen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich abgesagt haben müssen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund werde ich abgesagt haben müssen.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "müsste ich absagen",
        nebensatz: "aus diesem Grund",
        beispiel: "Aus diesem Grund müsste ich absagen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "müsse sie absagen",
        nebensatz: "aus diesem Grund",
        beispiel: "Sie sagt, aus diesem Grund müsse sie absagen.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "obwohl",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "gehe ich spazieren",
        nebensatz: "obwohl es regnet",
        beispiel: "Obwohl es regnet, gehe ich spazieren.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "ging ich spazieren",
        nebensatz: "obwohl es regnete",
        beispiel: "Obwohl es regnete, ging ich spazieren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "bin ich spazieren gegangen",
        nebensatz: "obwohl es geregnet hat",
        beispiel: "Obwohl es geregnet hat, bin ich spazieren gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war ich spazieren gegangen",
        nebensatz: "obwohl es geregnet hatte",
        beispiel: "Obwohl es geregnet hatte, war ich spazieren gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich spazieren gehen",
        nebensatz: "obwohl es regnen wird",
        beispiel: "Obwohl es regnen wird, werde ich spazieren gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich spazieren gegangen sein",
        nebensatz: "obwohl es geregnet haben wird",
        beispiel:
          "Obwohl es geregnet haben wird, werde ich spazieren gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich spazieren gehen",
        nebensatz: "obwohl es regnen würde",
        beispiel: "Obwohl es regnen würde, würde ich spazieren gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "gehe er spazieren",
        nebensatz: "obwohl es regne",
        beispiel: "Er sagt, obwohl es regne, gehe er spazieren.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "trotzdem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "gehe ich spazieren",
        nebensatz: "trotzdem",
        beispiel: "Es regnet, trotzdem gehe ich spazieren.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "ging ich spazieren",
        nebensatz: "trotzdem",
        beispiel: "Es regnete, trotzdem ging ich spazieren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "bin ich spazieren gegangen",
        nebensatz: "trotzdem",
        beispiel: "Es hat geregnet, trotzdem bin ich spazieren gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war ich spazieren gegangen",
        nebensatz: "trotzdem",
        beispiel: "Es hatte geregnet, trotzdem war ich spazieren gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich spazieren gehen",
        nebensatz: "trotzdem",
        beispiel: "Es wird regnen, trotzdem werde ich spazieren gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich spazieren gegangen sein",
        nebensatz: "trotzdem",
        beispiel:
          "Es wird geregnet haben, trotzdem werde ich spazieren gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich spazieren gehen",
        nebensatz: "trotzdem",
        beispiel: "Es würde regnen, trotzdem würde ich spazieren gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "gehe er spazieren",
        nebensatz: "trotzdem",
        beispiel: "Er sagt, es regne, trotzdem gehe er spazieren.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "dennoch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "löse ich sie",
        nebensatz: "dennoch",
        beispiel: "Die Aufgabe ist schwer, dennoch löse ich sie.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "löste ich sie",
        nebensatz: "dennoch",
        beispiel: "Die Aufgabe war schwer, dennoch löste ich sie.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich sie gelöst",
        nebensatz: "dennoch",
        beispiel:
          "Die Aufgabe ist schwer gewesen, dennoch habe ich sie gelöst.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich sie gelöst",
        nebensatz: "dennoch",
        beispiel:
          "Die Aufgabe war schwer gewesen, dennoch hatte ich sie gelöst.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich sie lösen",
        nebensatz: "dennoch",
        beispiel: "Die Aufgabe wird schwer sein, dennoch werde ich sie lösen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich sie gelöst haben",
        nebensatz: "dennoch",
        beispiel:
          "Die Aufgabe wird schwer gewesen sein, dennoch werde ich sie gelöst haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich sie lösen",
        nebensatz: "dennoch",
        beispiel: "Die Aufgabe wäre schwer, dennoch würde ich sie lösen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "löse sie sie",
        nebensatz: "dennoch",
        beispiel: "Sie sagt, die Aufgabe sei schwer, dennoch löse sie sie.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "aber",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich mag Kaffee",
        nebensatz: "aber ich trinke lieber Tee",
        beispiel: "Ich mag Kaffee, aber ich trinke lieber Tee.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich mochte Kaffee",
        nebensatz: "aber ich trank lieber Tee",
        beispiel: "Ich mochte Kaffee, aber ich trank lieber Tee.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe Kaffee gemocht",
        nebensatz: "aber ich habe lieber Tee getrunken",
        beispiel:
          "Ich habe Kaffee gemocht, aber ich habe lieber Tee getrunken.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte Kaffee gemocht",
        nebensatz: "aber ich hatte lieber Tee getrunken",
        beispiel:
          "Ich hatte Kaffee gemocht, aber ich hatte lieber Tee getrunken.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde Kaffee mögen",
        nebensatz: "aber ich werde lieber Tee trinken",
        beispiel: "Ich werde Kaffee mögen, aber ich werde lieber Tee trinken.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde Kaffee gemocht haben",
        nebensatz: "aber ich werde lieber Tee getrunken haben",
        beispiel:
          "Ich werde Kaffee gemocht haben, aber ich werde lieber Tee getrunken haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde Kaffee mögen",
        nebensatz: "aber ich würde lieber Tee trinken",
        beispiel: "Ich würde Kaffee mögen, aber ich würde lieber Tee trinken.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er möge Kaffee",
        nebensatz: "aber er trinke lieber Tee",
        beispiel: "Er sagt, er möge Kaffee, aber er trinke lieber Tee.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "jedoch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das Hotel ist schön",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Das Hotel ist schön, jedoch etwas teuer.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das Hotel war schön",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Das Hotel war schön, jedoch etwas teuer.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das Hotel ist schön gewesen",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Das Hotel ist schön gewesen, jedoch etwas teuer.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das Hotel war schön gewesen",
        nebensatz: "jedoch etwas teuer gewesen",
        beispiel: "Das Hotel war schön gewesen, jedoch etwas teuer gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das Hotel wird schön sein",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Das Hotel wird schön sein, jedoch etwas teuer.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das Hotel wird schön gewesen sein",
        nebensatz: "jedoch etwas teuer gewesen sein",
        beispiel:
          "Das Hotel wird schön gewesen sein, jedoch etwas teuer gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das Hotel wäre schön",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Das Hotel wäre schön, jedoch etwas teuer.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das Hotel sei schön",
        nebensatz: "jedoch etwas teuer",
        beispiel: "Sie sagt, das Hotel sei schön, jedoch etwas teuer.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "doch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er will kommen",
        nebensatz: "doch er hat keine Zeit",
        beispiel: "Er will kommen, doch er hat keine Zeit.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er wollte kommen",
        nebensatz: "doch er hatte keine Zeit",
        beispiel: "Er wollte kommen, doch er hatte keine Zeit.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat kommen wollen",
        nebensatz: "doch er hat keine Zeit gehabt",
        beispiel: "Er hat kommen wollen, doch er hat keine Zeit gehabt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte kommen wollen",
        nebensatz: "doch er hatte keine Zeit gehabt",
        beispiel: "Er hatte kommen wollen, doch er hatte keine Zeit gehabt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird kommen wollen",
        nebensatz: "doch er wird keine Zeit haben",
        beispiel: "Er wird kommen wollen, doch er wird keine Zeit haben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird gekommen sein wollen",
        nebensatz: "doch er wird keine Zeit gehabt haben",
        beispiel:
          "Er wird gekommen sein wollen, doch er wird keine Zeit gehabt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde kommen wollen",
        nebensatz: "doch er hätte keine Zeit",
        beispiel: "Er würde kommen wollen, doch er hätte keine Zeit.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er wolle kommen",
        nebensatz: "doch er habe keine Zeit",
        beispiel: "Er sagt, er wolle kommen, doch er habe keine Zeit.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "so dass / sodass",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er lernt viel",
        nebensatz: "sodass er die Prüfung besteht",
        beispiel: "Er lernt viel, sodass er die Prüfung besteht.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er lernte viel",
        nebensatz: "sodass er die Prüfung bestand",
        beispiel: "Er lernte viel, sodass er die Prüfung bestand.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat viel gelernt",
        nebensatz: "sodass er die Prüfung bestanden hat",
        beispiel: "Er hat viel gelernt, sodass er die Prüfung bestanden hat.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte viel gelernt",
        nebensatz: "sodass er die Prüfung bestanden hatte",
        beispiel:
          "Er hatte viel gelernt, sodass er die Prüfung bestanden hatte.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird viel lernen",
        nebensatz: "sodass er die Prüfung bestehen wird",
        beispiel: "Er wird viel lernen, sodass er die Prüfung bestehen wird.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird viel gelernt haben",
        nebensatz: "sodass er die Prüfung bestanden haben wird",
        beispiel:
          "Er wird viel gelernt haben, sodass er die Prüfung bestanden haben wird.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde viel lernen",
        nebensatz: "sodass er die Prüfung bestehen würde",
        beispiel: "Er würde viel lernen, sodass er die Prüfung bestehen würde.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er lerne viel",
        nebensatz: "sodass er die Prüfung bestehe",
        beispiel: "Er sagt, er lerne viel, sodass er die Prüfung bestehe.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "also",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich habe Zeit",
        nebensatz: "also können wir uns treffen",
        beispiel: "Ich habe Zeit, also können wir uns treffen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich hatte Zeit",
        nebensatz: "also konnten wir uns treffen",
        beispiel: "Ich hatte Zeit, also konnten wir uns treffen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe Zeit gehabt",
        nebensatz: "also haben wir uns treffen können",
        beispiel: "Ich habe Zeit gehabt, also haben wir uns treffen können.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte Zeit gehabt",
        nebensatz: "also hatten wir uns treffen können",
        beispiel: "Ich hatte Zeit gehabt, also hatten wir uns treffen können.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde Zeit haben",
        nebensatz: "also werden wir uns treffen können",
        beispiel: "Ich werde Zeit haben, also werden wir uns treffen können.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde Zeit gehabt haben",
        nebensatz: "also werden wir uns getroffen haben können",
        beispiel:
          "Ich werde Zeit gehabt haben, also werden wir uns getroffen haben können.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich hätte Zeit",
        nebensatz: "also könnten wir uns treffen",
        beispiel: "Ich hätte Zeit, also könnten wir uns treffen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie habe Zeit",
        nebensatz: "also könne man sich treffen",
        beispiel: "Sie sagt, sie habe Zeit, also könne man sich treffen.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "folglich",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er ist krank",
        nebensatz: "folglich bleibt er zu Hause",
        beispiel: "Er ist krank, folglich bleibt er zu Hause.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er war krank",
        nebensatz: "folglich blieb er zu Hause",
        beispiel: "Er war krank, folglich blieb er zu Hause.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er ist krank gewesen",
        nebensatz: "folglich ist er zu Hause geblieben",
        beispiel: "Er ist krank gewesen, folglich ist er zu Hause geblieben.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er war krank gewesen",
        nebensatz: "folglich war er zu Hause geblieben",
        beispiel: "Er war krank gewesen, folglich war er zu Hause geblieben.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird krank sein",
        nebensatz: "folglich wird er zu Hause bleiben",
        beispiel: "Er wird krank sein, folglich wird er zu Hause bleiben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird krank gewesen sein",
        nebensatz: "folglich wird er zu Hause geblieben sein",
        beispiel:
          "Er wird krank gewesen sein, folglich wird er zu Hause geblieben sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er wäre krank",
        nebensatz: "folglich würde er zu Hause bleiben",
        beispiel: "Er wäre krank, folglich würde er zu Hause bleiben.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er sei krank",
        nebensatz: "folglich bleibe er zu Hause",
        beispiel: "Er sagt, er sei krank, folglich bleibe er zu Hause.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "während",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich arbeite",
        nebensatz: "während du schläfst",
        beispiel: "Ich arbeite, während du schläfst.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich arbeitete",
        nebensatz: "während du schliefst",
        beispiel: "Ich arbeitete, während du schliefst.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe gearbeitet",
        nebensatz: "während du geschlafen hast",
        beispiel: "Ich habe gearbeitet, während du geschlafen hast.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte gearbeitet",
        nebensatz: "während du geschlafen hattest",
        beispiel: "Ich hatte gearbeitet, während du geschlafen hattest.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde arbeiten",
        nebensatz: "während du schlafen wirst",
        beispiel: "Ich werde arbeiten, während du schlafen wirst.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde gearbeitet haben",
        nebensatz: "während du geschlafen haben wirst",
        beispiel:
          "Ich werde gearbeitet haben, während du geschlafen haben wirst.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde arbeiten",
        nebensatz: "während du schlafen würdest",
        beispiel: "Ich würde arbeiten, während du schlafen würdest.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er arbeite",
        nebensatz: "während sie schlafe",
        beispiel: "Er sagt, er arbeite, während sie schlafe.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "hingegen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Peter ist fleißig",
        nebensatz: "sein Bruder hingegen ist faul",
        beispiel: "Peter ist fleißig, sein Bruder hingegen ist faul.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Peter war fleißig",
        nebensatz: "sein Bruder hingegen war faul",
        beispiel: "Peter war fleißig, sein Bruder hingegen war faul.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Peter ist fleißig gewesen",
        nebensatz: "sein Bruder hingegen ist faul gewesen",
        beispiel:
          "Peter ist fleißig gewesen, sein Bruder hingegen ist faul gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Peter war fleißig gewesen",
        nebensatz: "sein Bruder hingegen war faul gewesen",
        beispiel:
          "Peter war fleißig gewesen, sein Bruder hingegen war faul gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Peter wird fleißig sein",
        nebensatz: "sein Bruder hingegen wird faul sein",
        beispiel:
          "Peter wird fleißig sein, sein Bruder hingegen wird faul sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Peter wird fleißig gewesen sein",
        nebensatz: "sein Bruder hingegen wird faul gewesen sein",
        beispiel:
          "Peter wird fleißig gewesen sein, sein Bruder hingegen wird faul gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Peter wäre fleißig",
        nebensatz: "sein Bruder hingegen wäre faul",
        beispiel: "Peter wäre fleißig, sein Bruder hingegen wäre faul.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "Peter sei fleißig",
        nebensatz: "sein Bruder hingegen sei faul",
        beispiel: "Man sagt, Peter sei fleißig, sein Bruder hingegen sei faul.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "im Gegenteil",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das ist nicht schlecht",
        nebensatz: "im Gegenteil, es ist sehr gut",
        beispiel: "Das ist nicht schlecht, im Gegenteil, es ist sehr gut.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das war nicht schlecht",
        nebensatz: "im Gegenteil, es war sehr gut",
        beispiel: "Das war nicht schlecht, im Gegenteil, es war sehr gut.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das ist nicht schlecht gewesen",
        nebensatz: "im Gegenteil, es ist sehr gut gewesen",
        beispiel:
          "Das ist nicht schlecht gewesen, im Gegenteil, es ist sehr gut gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das war nicht schlecht gewesen",
        nebensatz: "im Gegenteil, es war sehr gut gewesen",
        beispiel:
          "Das war nicht schlecht gewesen, im Gegenteil, es war sehr gut gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das wird nicht schlecht sein",
        nebensatz: "im Gegenteil, es wird sehr gut sein",
        beispiel:
          "Das wird nicht schlecht sein, im Gegenteil, es wird sehr gut sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das wird nicht schlecht gewesen sein",
        nebensatz: "im Gegenteil, es wird sehr gut gewesen sein",
        beispiel:
          "Das wird nicht schlecht gewesen sein, im Gegenteil, es wird sehr gut gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das wäre nicht schlecht",
        nebensatz: "im Gegenteil, es wäre sehr gut",
        beispiel: "Das wäre nicht schlecht, im Gegenteil, es wäre sehr gut.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das sei nicht schlecht",
        nebensatz: "im Gegenteil, es sei sehr gut",
        beispiel:
          "Er sagt, das sei nicht schlecht, im Gegenteil, es sei sehr gut.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "sondern",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich trinke keinen Kaffee",
        nebensatz: "sondern Tee",
        beispiel: "Ich trinke keinen Kaffee, sondern Tee.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich trank keinen Kaffee",
        nebensatz: "sondern Tee",
        beispiel: "Ich trank keinen Kaffee, sondern Tee.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe keinen Kaffee getrunken",
        nebensatz: "sondern Tee",
        beispiel: "Ich habe keinen Kaffee getrunken, sondern Tee.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte keinen Kaffee getrunken",
        nebensatz: "sondern Tee",
        beispiel: "Ich hatte keinen Kaffee getrunken, sondern Tee.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde keinen Kaffee trinken",
        nebensatz: "sondern Tee",
        beispiel: "Ich werde keinen Kaffee trinken, sondern Tee.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde keinen Kaffee getrunken haben",
        nebensatz: "sondern Tee",
        beispiel: "Ich werde keinen Kaffee getrunken haben, sondern Tee.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde keinen Kaffee trinken",
        nebensatz: "sondern Tee",
        beispiel: "Ich würde keinen Kaffee trinken, sondern Tee.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie trinke keinen Kaffee",
        nebensatz: "sondern Tee",
        beispiel: "Sie sagt, sie trinke keinen Kaffee, sondern Tee.",
      },
    ],
  },
  {
    kategorie: "FINALE KONNEKTOREN",
    konnektor: "damit",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich lerne viel",
        nebensatz: "damit ich die Prüfung bestehe",
        beispiel: "Ich lerne viel, damit ich die Prüfung bestehe.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich lernte viel",
        nebensatz: "damit ich die Prüfung bestand",
        beispiel: "Ich lernte viel, damit ich die Prüfung bestand.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe viel gelernt",
        nebensatz: "damit ich die Prüfung bestehe",
        beispiel: "Ich habe viel gelernt, damit ich die Prüfung bestehe.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte viel gelernt",
        nebensatz: "damit ich die Prüfung bestehen konnte",
        beispiel:
          "Ich hatte viel gelernt, damit ich die Prüfung bestehen konnte.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde viel lernen",
        nebensatz: "damit ich die Prüfung bestehe",
        beispiel: "Ich werde viel lernen, damit ich die Prüfung bestehe.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde viel gelernt haben",
        nebensatz: "damit ich die Prüfung bestanden haben werde",
        beispiel:
          "Ich werde viel gelernt haben, damit ich die Prüfung bestanden haben werde.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde viel lernen",
        nebensatz: "damit ich die Prüfung bestehen könnte",
        beispiel:
          "Ich würde viel lernen, damit ich die Prüfung bestehen könnte.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er lerne viel",
        nebensatz: "damit er die Prüfung bestehe",
        beispiel: "Er sagt, er lerne viel, damit er die Prüfung bestehe.",
      },
    ],
  },
  {
    kategorie: "FINALE KONNEKTOREN",
    konnektor: "um ... zu",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich gehe in die Bibliothek",
        nebensatz: "um zu lernen",
        beispiel: "Ich gehe in die Bibliothek, um zu lernen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich ging in die Bibliothek",
        nebensatz: "um zu lernen",
        beispiel: "Ich ging in die Bibliothek, um zu lernen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich bin in die Bibliothek gegangen",
        nebensatz: "um zu lernen",
        beispiel: "Ich bin in die Bibliothek gegangen, um zu lernen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich war in die Bibliothek gegangen",
        nebensatz: "um zu lernen",
        beispiel: "Ich war in die Bibliothek gegangen, um zu lernen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde in die Bibliothek gehen",
        nebensatz: "um zu lernen",
        beispiel: "Ich werde in die Bibliothek gehen, um zu lernen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde in die Bibliothek gegangen sein",
        nebensatz: "um zu lernen",
        beispiel: "Ich werde in die Bibliothek gegangen sein, um zu lernen.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde in die Bibliothek gehen",
        nebensatz: "um zu lernen",
        beispiel: "Ich würde in die Bibliothek gehen, um zu lernen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie gehe in die Bibliothek",
        nebensatz: "um zu lernen",
        beispiel: "Sie sagt, sie gehe in die Bibliothek, um zu lernen.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "wenn",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "besuche ich dich",
        nebensatz: "wenn ich Zeit habe",
        beispiel: "Wenn ich Zeit habe, besuche ich dich.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "besuchte ich dich",
        nebensatz: "wenn ich Zeit hatte",
        beispiel: "Wenn ich Zeit hatte, besuchte ich dich.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich dich besucht",
        nebensatz: "wenn ich Zeit gehabt habe",
        beispiel: "Wenn ich Zeit gehabt habe, habe ich dich besucht.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich dich besucht",
        nebensatz: "wenn ich Zeit gehabt hatte",
        beispiel: "Wenn ich Zeit gehabt hatte, hatte ich dich besucht.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich dich besuchen",
        nebensatz: "wenn ich Zeit haben werde",
        beispiel: "Wenn ich Zeit haben werde, werde ich dich besuchen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich dich besucht haben",
        nebensatz: "wenn ich Zeit gehabt haben werde",
        beispiel:
          "Wenn ich Zeit gehabt haben werde, werde ich dich besucht haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich dich besuchen",
        nebensatz: "wenn ich Zeit hätte",
        beispiel: "Wenn ich Zeit hätte, würde ich dich besuchen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "besuche er sie",
        nebensatz: "wenn er Zeit habe",
        beispiel: "Er sagt, wenn er Zeit habe, besuche er sie.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "als",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "(nicht üblich)",
        nebensatz: "(nicht üblich)",
        beispiel: "",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "lebte ich in Berlin",
        nebensatz: "als ich jung war",
        beispiel: "Als ich jung war, lebte ich in Berlin.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich in Berlin gelebt",
        nebensatz: "als ich jung war",
        beispiel: "Als ich jung war, habe ich in Berlin gelebt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich in Berlin gelebt",
        nebensatz: "als ich jung gewesen war",
        beispiel: "Als ich jung gewesen war, hatte ich in Berlin gelebt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "(nicht üblich)",
        nebensatz: "(nicht üblich)",
        beispiel: "",
      },
      {
        zeit: "Futur II",
        hauptsatz: "(nicht üblich)",
        nebensatz: "(nicht üblich)",
        beispiel: "",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich in Berlin leben",
        nebensatz: "als ich jung wäre",
        beispiel: "Als ich jung wäre, würde ich in Berlin leben.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "habe er in Berlin gelebt",
        nebensatz: "als er jung gewesen sei",
        beispiel: "Er sagt, als er jung gewesen sei, habe er in Berlin gelebt.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "nachdem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "gehe ich spazieren",
        nebensatz: "nachdem ich esse",
        beispiel: "Nachdem ich esse, gehe ich spazieren.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "ging ich spazieren",
        nebensatz: "nachdem ich gegessen hatte",
        beispiel: "Nachdem ich gegessen hatte, ging ich spazieren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "bin ich spazieren gegangen",
        nebensatz: "nachdem ich gegessen habe",
        beispiel: "Nachdem ich gegessen habe, bin ich spazieren gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war ich spazieren gegangen",
        nebensatz: "nachdem ich gegessen hatte",
        beispiel: "Nachdem ich gegessen hatte, war ich spazieren gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich spazieren gehen",
        nebensatz: "nachdem ich gegessen haben werde",
        beispiel:
          "Nachdem ich gegessen haben werde, werde ich spazieren gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich spazieren gegangen sein",
        nebensatz: "nachdem ich gegessen haben werde",
        beispiel:
          "Nachdem ich gegessen haben werde, werde ich spazieren gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich spazieren gehen",
        nebensatz: "nachdem ich gegessen hätte",
        beispiel: "Nachdem ich gegessen hätte, würde ich spazieren gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "gehe sie spazieren",
        nebensatz: "nachdem sie gegessen habe",
        beispiel: "Sie sagt, nachdem sie gegessen habe, gehe sie spazieren.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "bevor",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "ruf mich an",
        nebensatz: "bevor du gehst",
        beispiel: "Bevor du gehst, ruf mich an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "riefst du mich an",
        nebensatz: "bevor du gingst",
        beispiel: "Bevor du gingst, riefst du mich an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "hast du mich angerufen",
        nebensatz: "bevor du gegangen bist",
        beispiel: "Bevor du gegangen bist, hast du mich angerufen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hattest du mich angerufen",
        nebensatz: "bevor du gegangen warst",
        beispiel: "Bevor du gegangen warst, hattest du mich angerufen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "wirst du mich anrufen",
        nebensatz: "bevor du gehen wirst",
        beispiel: "Bevor du gehen wirst, wirst du mich anrufen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "wirst du mich angerufen haben",
        nebensatz: "bevor du gegangen sein wirst",
        beispiel:
          "Bevor du gegangen sein wirst, wirst du mich angerufen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würdest du mich anrufen",
        nebensatz: "bevor du gehen würdest",
        beispiel: "Bevor du gehen würdest, würdest du mich anrufen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "rufe er an",
        nebensatz: "bevor er gehe",
        beispiel: "Er sagt, bevor er gehe, rufe er an.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "seit / seitdem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "fühle ich mich wohl",
        nebensatz: "seit ich hier wohne",
        beispiel: "Seit ich hier wohne, fühle ich mich wohl.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "fühlte ich mich wohl",
        nebensatz: "seit ich dort wohnte",
        beispiel: "Seit ich dort wohnte, fühlte ich mich wohl.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich mich wohlgefühlt",
        nebensatz: "seit ich hier gewohnt habe",
        beispiel: "Seit ich hier gewohnt habe, habe ich mich wohlgefühlt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich mich wohlgefühlt",
        nebensatz: "seit ich dort gewohnt hatte",
        beispiel: "Seit ich dort gewohnt hatte, hatte ich mich wohlgefühlt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "(unüblich)",
        nebensatz: "(unüblich)",
        beispiel: "",
      },
      {
        zeit: "Futur II",
        hauptsatz: "(unüblich)",
        nebensatz: "(unüblich)",
        beispiel: "",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich mich wohlfühlen",
        nebensatz: "seit ich dort wohnen würde",
        beispiel: "Seit ich dort wohnen würde, würde ich mich wohlfühlen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "fühle sie sich wohl",
        nebensatz: "seit sie dort wohne",
        beispiel: "Sie sagt, seit sie dort wohne, fühle sie sich wohl.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "bis",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Warte hier",
        nebensatz: "bis ich zurückkomme",
        beispiel: "Warte hier, bis ich zurückkomme.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Du wartetest hier",
        nebensatz: "bis ich zurückkam",
        beispiel: "Du wartetest hier, bis ich zurückkam.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Du hast hier gewartet",
        nebensatz: "bis ich zurückgekommen bin",
        beispiel: "Du hast hier gewartet, bis ich zurückgekommen bin.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Du hattest hier gewartet",
        nebensatz: "bis ich zurückgekommen war",
        beispiel: "Du hattest hier gewartet, bis ich zurückgekommen war.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Du wirst hier warten",
        nebensatz: "bis ich zurückkomme",
        beispiel: "Du wirst hier warten, bis ich zurückkomme.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Du wirst hier gewartet haben",
        nebensatz: "bis ich zurückgekommen sein werde",
        beispiel:
          "Du wirst hier gewartet haben, bis ich zurückgekommen sein werde.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Du würdest hier warten",
        nebensatz: "bis ich zurückkommen würde",
        beispiel: "Du würdest hier warten, bis ich zurückkommen würde.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "man warte hier",
        nebensatz: "bis er zurückkomme",
        beispiel: "Er sagt, man warte hier, bis er zurückkomme.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "sobald",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "rufe ich dich an",
        nebensatz: "sobald ich fertig bin",
        beispiel: "Sobald ich fertig bin, rufe ich dich an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "rief ich dich an",
        nebensatz: "sobald ich fertig war",
        beispiel: "Sobald ich fertig war, rief ich dich an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "habe ich dich angerufen",
        nebensatz: "sobald ich fertig gewesen bin",
        beispiel: "Sobald ich fertig gewesen bin, habe ich dich angerufen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatte ich dich angerufen",
        nebensatz: "sobald ich fertig gewesen war",
        beispiel: "Sobald ich fertig gewesen war, hatte ich dich angerufen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werde ich dich anrufen",
        nebensatz: "sobald ich fertig sein werde",
        beispiel: "Sobald ich fertig sein werde, werde ich dich anrufen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werde ich dich angerufen haben",
        nebensatz: "sobald ich fertig gewesen sein werde",
        beispiel:
          "Sobald ich fertig gewesen sein werde, werde ich dich angerufen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würde ich dich anrufen",
        nebensatz: "sobald ich fertig wäre",
        beispiel: "Sobald ich fertig wäre, würde ich dich anrufen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "rufe sie an",
        nebensatz: "sobald sie fertig sei",
        beispiel: "Sie sagt, sobald sie fertig sei, rufe sie an.",
      },
    ],
  },
  {
    kategorie: "KONDITIONALE KONNEKTOREN",
    konnektor: "falls",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "ruf mich an",
        nebensatz: "falls du Hilfe brauchst",
        beispiel: "Falls du Hilfe brauchst, ruf mich an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "riefst du mich an",
        nebensatz: "falls du Hilfe brauchtest",
        beispiel: "Falls du Hilfe brauchtest, riefst du mich an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "hast du mich angerufen",
        nebensatz: "falls du Hilfe gebraucht hast",
        beispiel: "Falls du Hilfe gebraucht hast, hast du mich angerufen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hattest du mich angerufen",
        nebensatz: "falls du Hilfe gebraucht hattest",
        beispiel:
          "Falls du Hilfe gebraucht hattest, hattest du mich angerufen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "wirst du mich anrufen",
        nebensatz: "falls du Hilfe brauchen wirst",
        beispiel: "Falls du Hilfe brauchen wirst, wirst du mich anrufen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "wirst du mich angerufen haben",
        nebensatz: "falls du Hilfe gebraucht haben wirst",
        beispiel:
          "Falls du Hilfe gebraucht haben wirst, wirst du mich angerufen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würdest du mich anrufen",
        nebensatz: "falls du Hilfe bräuchtest",
        beispiel: "Falls du Hilfe bräuchtest, würdest du mich anrufen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "rufe er an",
        nebensatz: "falls er Hilfe brauche",
        beispiel: "Er sagt, falls er Hilfe brauche, rufe er an.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "indem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er lernt Deutsch",
        nebensatz: "indem er viel liest",
        beispiel: "Er lernt Deutsch, indem er viel liest.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er lernte Deutsch",
        nebensatz: "indem er viel las",
        beispiel: "Er lernte Deutsch, indem er viel las.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat Deutsch gelernt",
        nebensatz: "indem er viel gelesen hat",
        beispiel: "Er hat Deutsch gelernt, indem er viel gelesen hat.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte Deutsch gelernt",
        nebensatz: "indem er viel gelesen hatte",
        beispiel: "Er hatte Deutsch gelernt, indem er viel gelesen hatte.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird Deutsch lernen",
        nebensatz: "indem er viel lesen wird",
        beispiel: "Er wird Deutsch lernen, indem er viel lesen wird.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird Deutsch gelernt haben",
        nebensatz: "indem er viel gelesen haben wird",
        beispiel:
          "Er wird Deutsch gelernt haben, indem er viel gelesen haben wird.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde Deutsch lernen",
        nebensatz: "indem er viel lesen würde",
        beispiel: "Er würde Deutsch lernen, indem er viel lesen würde.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie lerne Deutsch",
        nebensatz: "indem sie viel lese",
        beispiel: "Sie sagt, sie lerne Deutsch, indem sie viel lese.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "wie",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Mach es so",
        nebensatz: "wie ich es dir zeige",
        beispiel: "Mach es so, wie ich es dir zeige.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich machte es so",
        nebensatz: "wie du es mir zeigtest",
        beispiel: "Ich machte es so, wie du es mir zeigtest.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe es so gemacht",
        nebensatz: "wie du es mir gezeigt hast",
        beispiel: "Ich habe es so gemacht, wie du es mir gezeigt hast.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte es so gemacht",
        nebensatz: "wie du es mir gezeigt hattest",
        beispiel: "Ich hatte es so gemacht, wie du es mir gezeigt hattest.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde es so machen",
        nebensatz: "wie du es mir zeigen wirst",
        beispiel: "Ich werde es so machen, wie du es mir zeigen wirst.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde es so gemacht haben",
        nebensatz: "wie du es mir gezeigt haben wirst",
        beispiel:
          "Ich werde es so gemacht haben, wie du es mir gezeigt haben wirst.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde es so machen",
        nebensatz: "wie du es mir zeigen würdest",
        beispiel: "Ich würde es so machen, wie du es mir zeigen würdest.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er mache es so",
        nebensatz: "wie man es ihm zeige",
        beispiel: "Er sagt, er mache es so, wie man es ihm zeige.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "oder",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Möchtest du Kaffee",
        nebensatz: "oder Tee",
        beispiel: "Möchtest du Kaffee oder Tee?",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Wolltest du Kaffee",
        nebensatz: "oder Tee",
        beispiel: "Wolltest du Kaffee oder Tee?",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Hast du Kaffee",
        nebensatz: "oder Tee gewollt",
        beispiel: "Hast du Kaffee oder Tee gewollt?",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Hattest du Kaffee",
        nebensatz: "oder Tee gewollt",
        beispiel: "Hattest du Kaffee oder Tee gewollt?",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Wirst du Kaffee",
        nebensatz: "oder Tee wollen",
        beispiel: "Wirst du Kaffee oder Tee wollen?",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Wirst du Kaffee",
        nebensatz: "oder Tee gewollt haben",
        beispiel: "Wirst du Kaffee oder Tee gewollt haben?",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Würdest du Kaffee",
        nebensatz: "oder Tee wollen",
        beispiel: "Würdest du Kaffee oder Tee wollen?",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "ob man Kaffee",
        nebensatz: "oder Tee wolle",
        beispiel: "Er fragt, ob man Kaffee oder Tee wolle.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "entweder ... oder",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Entweder kommst du mit",
        nebensatz: "oder du bleibst hier",
        beispiel: "Entweder kommst du mit oder du bleibst hier.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Entweder kamst du mit",
        nebensatz: "oder du bliebst hier",
        beispiel: "Entweder kamst du mit oder du bliebst hier.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Entweder bist du mitgekommen",
        nebensatz: "oder du bist hier geblieben",
        beispiel: "Entweder bist du mitgekommen oder du bist hier geblieben.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Entweder warst du mitgekommen",
        nebensatz: "oder du warst hier geblieben",
        beispiel: "Entweder warst du mitgekommen oder du warst hier geblieben.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Entweder wirst du mitkommen",
        nebensatz: "oder du wirst hier bleiben",
        beispiel: "Entweder wirst du mitkommen oder du wirst hier bleiben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Entweder wirst du mitgekommen sein",
        nebensatz: "oder du wirst hier geblieben sein",
        beispiel:
          "Entweder wirst du mitgekommen sein oder du wirst hier geblieben sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Entweder würdest du mitkommen",
        nebensatz: "oder du würdest hier bleiben",
        beispiel: "Entweder würdest du mitkommen oder du würdest hier bleiben.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "entweder komme man mit",
        nebensatz: "oder man bleibe hier",
        beispiel: "Man sagt, entweder komme man mit oder man bleibe hier.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "weder ... noch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich habe",
        nebensatz: "weder Zeit noch Lust",
        beispiel: "Ich habe weder Zeit noch Lust.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich hatte",
        nebensatz: "weder Zeit noch Lust",
        beispiel: "Ich hatte weder Zeit noch Lust.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe",
        nebensatz: "weder Zeit noch Lust gehabt",
        beispiel: "Ich habe weder Zeit noch Lust gehabt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte",
        nebensatz: "weder Zeit noch Lust gehabt",
        beispiel: "Ich hatte weder Zeit noch Lust gehabt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde",
        nebensatz: "weder Zeit noch Lust haben",
        beispiel: "Ich werde weder Zeit noch Lust haben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde",
        nebensatz: "weder Zeit noch Lust gehabt haben",
        beispiel: "Ich werde weder Zeit noch Lust gehabt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich hätte",
        nebensatz: "weder Zeit noch Lust",
        beispiel: "Ich hätte weder Zeit noch Lust.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie habe",
        nebensatz: "weder Zeit noch Lust",
        beispiel: "Sie sagt, sie habe weder Zeit noch Lust.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "sowohl ... als auch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er spricht",
        nebensatz: "sowohl Englisch als auch Deutsch",
        beispiel: "Er spricht sowohl Englisch als auch Deutsch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er sprach",
        nebensatz: "sowohl Englisch als auch Deutsch",
        beispiel: "Er sprach sowohl Englisch als auch Deutsch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat",
        nebensatz: "sowohl Englisch als auch Deutsch gesprochen",
        beispiel: "Er hat sowohl Englisch als auch Deutsch gesprochen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte",
        nebensatz: "sowohl Englisch als auch Deutsch gesprochen",
        beispiel: "Er hatte sowohl Englisch als auch Deutsch gesprochen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird",
        nebensatz: "sowohl Englisch als auch Deutsch sprechen",
        beispiel: "Er wird sowohl Englisch als auch Deutsch sprechen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird",
        nebensatz: "sowohl Englisch als auch Deutsch gesprochen haben",
        beispiel: "Er wird sowohl Englisch als auch Deutsch gesprochen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde",
        nebensatz: "sowohl Englisch als auch Deutsch sprechen",
        beispiel: "Er würde sowohl Englisch als auch Deutsch sprechen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er spreche",
        nebensatz: "sowohl Englisch als auch Deutsch",
        beispiel: "Man sagt, er spreche sowohl Englisch als auch Deutsch.",
      },
    ],
  },
  {
    kategorie: "ADDITIVE KONNEKTOREN",
    konnektor: "und",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich mag Musik",
        nebensatz: "und Sport",
        beispiel: "Ich mag Musik und Sport.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich mochte Musik",
        nebensatz: "und Sport",
        beispiel: "Ich mochte Musik und Sport.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe Musik",
        nebensatz: "und Sport gemocht",
        beispiel: "Ich habe Musik und Sport gemocht.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte Musik",
        nebensatz: "und Sport gemocht",
        beispiel: "Ich hatte Musik und Sport gemocht.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde Musik",
        nebensatz: "und Sport mögen",
        beispiel: "Ich werde Musik und Sport mögen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde Musik",
        nebensatz: "und Sport gemocht haben",
        beispiel: "Ich werde Musik und Sport gemocht haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde Musik",
        nebensatz: "und Sport mögen",
        beispiel: "Ich würde Musik und Sport mögen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er möge Musik",
        nebensatz: "und Sport",
        beispiel: "Er sagt, er möge Musik und Sport.",
      },
    ],
  },
  {
    kategorie: "ADDITIVE KONNEKTOREN",
    konnektor: "außerdem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das Hotel ist schön",
        nebensatz: "außerdem ist es günstig",
        beispiel: "Das Hotel ist schön, außerdem ist es günstig.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das Hotel war schön",
        nebensatz: "außerdem war es günstig",
        beispiel: "Das Hotel war schön, außerdem war es günstig.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das Hotel ist schön gewesen",
        nebensatz: "außerdem ist es günstig gewesen",
        beispiel:
          "Das Hotel ist schön gewesen, außerdem ist es günstig gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das Hotel war schön gewesen",
        nebensatz: "außerdem war es günstig gewesen",
        beispiel:
          "Das Hotel war schön gewesen, außerdem war es günstig gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das Hotel wird schön sein",
        nebensatz: "außerdem wird es günstig sein",
        beispiel: "Das Hotel wird schön sein, außerdem wird es günstig sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das Hotel wird schön gewesen sein",
        nebensatz: "außerdem wird es günstig gewesen sein",
        beispiel:
          "Das Hotel wird schön gewesen sein, außerdem wird es günstig gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das Hotel wäre schön",
        nebensatz: "außerdem wäre es günstig",
        beispiel: "Das Hotel wäre schön, außerdem wäre es günstig.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das Hotel sei schön",
        nebensatz: "außerdem sei es günstig",
        beispiel: "Sie sagt, das Hotel sei schön, außerdem sei es günstig.",
      },
    ],
  },
  {
    kategorie: "ADDITIVE KONNEKTOREN",
    konnektor: "zusätzlich",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Zusätzlich bieten wir kostenlose Parkplätze an",
        nebensatz: "",
        beispiel: "Zusätzlich bieten wir kostenlose Parkplätze an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Zusätzlich boten wir kostenlose Parkplätze an",
        nebensatz: "",
        beispiel: "Zusätzlich boten wir kostenlose Parkplätze an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Zusätzlich haben wir kostenlose Parkplätze angeboten",
        nebensatz: "",
        beispiel: "Zusätzlich haben wir kostenlose Parkplätze angeboten.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Zusätzlich hatten wir kostenlose Parkplätze angeboten",
        nebensatz: "",
        beispiel: "Zusätzlich hatten wir kostenlose Parkplätze angeboten.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Zusätzlich werden wir kostenlose Parkplätze anbieten",
        nebensatz: "",
        beispiel: "Zusätzlich werden wir kostenlose Parkplätze anbieten.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Zusätzlich werden wir kostenlose Parkplätze angeboten haben",
        nebensatz: "",
        beispiel:
          "Zusätzlich werden wir kostenlose Parkplätze angeboten haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Zusätzlich würden wir kostenlose Parkplätze anbieten",
        nebensatz: "",
        beispiel: "Zusätzlich würden wir kostenlose Parkplätze anbieten.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "zusätzlich biete man kostenlose Parkplätze an",
        nebensatz: "",
        beispiel: "Man sagt, zusätzlich biete man kostenlose Parkplätze an.",
      },
    ],
  },
  {
    kategorie: "ADDITIVE KONNEKTOREN",
    konnektor: "darüber hinaus",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Darüber hinaus gibt es noch weitere Vorteile",
        nebensatz: "",
        beispiel: "Darüber hinaus gibt es noch weitere Vorteile.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Darüber hinaus gab es noch weitere Vorteile",
        nebensatz: "",
        beispiel: "Darüber hinaus gab es noch weitere Vorteile.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Darüber hinaus hat es noch weitere Vorteile gegeben",
        nebensatz: "",
        beispiel: "Darüber hinaus hat es noch weitere Vorteile gegeben.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Darüber hinaus hatte es noch weitere Vorteile gegeben",
        nebensatz: "",
        beispiel: "Darüber hinaus hatte es noch weitere Vorteile gegeben.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Darüber hinaus wird es noch weitere Vorteile geben",
        nebensatz: "",
        beispiel: "Darüber hinaus wird es noch weitere Vorteile geben.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Darüber hinaus wird es noch weitere Vorteile gegeben haben",
        nebensatz: "",
        beispiel: "Darüber hinaus wird es noch weitere Vorteile gegeben haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Darüber hinaus würde es noch weitere Vorteile geben",
        nebensatz: "",
        beispiel: "Darüber hinaus würde es noch weitere Vorteile geben.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "darüber hinaus gebe es noch weitere Vorteile",
        nebensatz: "",
        beispiel: "Man sagt, darüber hinaus gebe es noch weitere Vorteile.",
      },
    ],
  },
  {
    kategorie: "ADDITIVE KONNEKTOREN",
    konnektor: "zudem",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das Zimmer ist groß",
        nebensatz: "zudem ist es hell",
        beispiel: "Das Zimmer ist groß, zudem ist es hell.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das Zimmer war groß",
        nebensatz: "zudem war es hell",
        beispiel: "Das Zimmer war groß, zudem war es hell.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das Zimmer ist groß gewesen",
        nebensatz: "zudem ist es hell gewesen",
        beispiel: "Das Zimmer ist groß gewesen, zudem ist es hell gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das Zimmer war groß gewesen",
        nebensatz: "zudem war es hell gewesen",
        beispiel: "Das Zimmer war groß gewesen, zudem war es hell gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das Zimmer wird groß sein",
        nebensatz: "zudem wird es hell sein",
        beispiel: "Das Zimmer wird groß sein, zudem wird es hell sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das Zimmer wird groß gewesen sein",
        nebensatz: "zudem wird es hell gewesen sein",
        beispiel:
          "Das Zimmer wird groß gewesen sein, zudem wird es hell gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das Zimmer wäre groß",
        nebensatz: "zudem wäre es hell",
        beispiel: "Das Zimmer wäre groß, zudem wäre es hell.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das Zimmer sei groß",
        nebensatz: "zudem sei es hell",
        beispiel: "Sie sagt, das Zimmer sei groß, zudem sei es hell.",
      },
    ],
  },
  {
    kategorie: "AUFZÄHLENDE KONNEKTOREN",
    konnektor: "erstens, zweitens, drittens",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Erstens ist es teuer",
        nebensatz: "zweitens ist es weit weg",
        beispiel: "Erstens ist es teuer, zweitens ist es weit weg.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Erstens war es teuer",
        nebensatz: "zweitens war es weit weg",
        beispiel: "Erstens war es teuer, zweitens war es weit weg.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Erstens ist es teuer gewesen",
        nebensatz: "zweitens ist es weit weg gewesen",
        beispiel:
          "Erstens ist es teuer gewesen, zweitens ist es weit weg gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Erstens war es teuer gewesen",
        nebensatz: "zweitens war es weit weg gewesen",
        beispiel:
          "Erstens war es teuer gewesen, zweitens war es weit weg gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Erstens wird es teuer sein",
        nebensatz: "zweitens wird es weit weg sein",
        beispiel: "Erstens wird es teuer sein, zweitens wird es weit weg sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Erstens wird es teuer gewesen sein",
        nebensatz: "zweitens wird es weit weg gewesen sein",
        beispiel:
          "Erstens wird es teuer gewesen sein, zweitens wird es weit weg gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Erstens wäre es teuer",
        nebensatz: "zweitens wäre es weit weg",
        beispiel: "Erstens wäre es teuer, zweitens wäre es weit weg.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "erstens sei es teuer",
        nebensatz: "zweitens sei es weit weg",
        beispiel: "Man sagt, erstens sei es teuer, zweitens sei es weit weg.",
      },
    ],
  },
  {
    kategorie: "AUFZÄHLENDE KONNEKTOREN",
    konnektor: "einerseits ... andererseits",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Einerseits ist es praktisch",
        nebensatz: "andererseits ist es teuer",
        beispiel: "Einerseits ist es praktisch, andererseits ist es teuer.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Einerseits war es praktisch",
        nebensatz: "andererseits war es teuer",
        beispiel: "Einerseits war es praktisch, andererseits war es teuer.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Einerseits ist es praktisch gewesen",
        nebensatz: "andererseits ist es teuer gewesen",
        beispiel:
          "Einerseits ist es praktisch gewesen, andererseits ist es teuer gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Einerseits war es praktisch gewesen",
        nebensatz: "andererseits war es teuer gewesen",
        beispiel:
          "Einerseits war es praktisch gewesen, andererseits war es teuer gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Einerseits wird es praktisch sein",
        nebensatz: "andererseits wird es teuer sein",
        beispiel:
          "Einerseits wird es praktisch sein, andererseits wird es teuer sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Einerseits wird es praktisch gewesen sein",
        nebensatz: "andererseits wird es teuer gewesen sein",
        beispiel:
          "Einerseits wird es praktisch gewesen sein, andererseits wird es teuer gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Einerseits wäre es praktisch",
        nebensatz: "andererseits wäre es teuer",
        beispiel: "Einerseits wäre es praktisch, andererseits wäre es teuer.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "einerseits sei es praktisch",
        nebensatz: "andererseits sei es teuer",
        beispiel:
          "Sie sagt, einerseits sei es praktisch, andererseits sei es teuer.",
      },
    ],
  },
  {
    kategorie: "AUFZÄHLENDE KONNEKTOREN",
    konnektor: "zuerst, dann, danach, schließlich",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Zuerst gehe ich einkaufen",
        nebensatz: "dann koche ich",
        beispiel: "Zuerst gehe ich einkaufen, dann koche ich.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Zuerst ging ich einkaufen",
        nebensatz: "dann kochte ich",
        beispiel: "Zuerst ging ich einkaufen, dann kochte ich.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Zuerst bin ich einkaufen gegangen",
        nebensatz: "dann habe ich gekocht",
        beispiel: "Zuerst bin ich einkaufen gegangen, dann habe ich gekocht.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Zuerst war ich einkaufen gegangen",
        nebensatz: "dann hatte ich gekocht",
        beispiel: "Zuerst war ich einkaufen gegangen, dann hatte ich gekocht.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Zuerst werde ich einkaufen gehen",
        nebensatz: "dann werde ich kochen",
        beispiel: "Zuerst werde ich einkaufen gehen, dann werde ich kochen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Zuerst werde ich einkaufen gegangen sein",
        nebensatz: "dann werde ich gekocht haben",
        beispiel:
          "Zuerst werde ich einkaufen gegangen sein, dann werde ich gekocht haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Zuerst würde ich einkaufen gehen",
        nebensatz: "dann würde ich kochen",
        beispiel: "Zuerst würde ich einkaufen gehen, dann würde ich kochen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "zuerst gehe er einkaufen",
        nebensatz: "dann koche er",
        beispiel: "Er sagt, zuerst gehe er einkaufen, dann koche er.",
      },
    ],
  },
  {
    kategorie: "ZUSAMMENFASSENDE KONNEKTOREN",
    konnektor: "insgesamt",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Insgesamt ist es ein schöner Tag",
        nebensatz: "",
        beispiel: "Insgesamt ist es ein schöner Tag.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Insgesamt war es ein schöner Tag",
        nebensatz: "",
        beispiel: "Insgesamt war es ein schöner Tag.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Insgesamt ist es ein schöner Tag gewesen",
        nebensatz: "",
        beispiel: "Insgesamt ist es ein schöner Tag gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Insgesamt war es ein schöner Tag gewesen",
        nebensatz: "",
        beispiel: "Insgesamt war es ein schöner Tag gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Insgesamt wird es ein schöner Tag sein",
        nebensatz: "",
        beispiel: "Insgesamt wird es ein schöner Tag sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Insgesamt wird es ein schöner Tag gewesen sein",
        nebensatz: "",
        beispiel: "Insgesamt wird es ein schöner Tag gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Insgesamt wäre es ein schöner Tag",
        nebensatz: "",
        beispiel: "Insgesamt wäre es ein schöner Tag.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "insgesamt sei es ein schöner Tag",
        nebensatz: "",
        beispiel: "Man sagt, insgesamt sei es ein schöner Tag.",
      },
    ],
  },
  {
    kategorie: "ZUSAMMENFASSENDE KONNEKTOREN",
    konnektor: "im Allgemeinen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Im Allgemeinen bin ich zufrieden",
        nebensatz: "",
        beispiel: "Im Allgemeinen bin ich zufrieden.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Im Allgemeinen war ich zufrieden",
        nebensatz: "",
        beispiel: "Im Allgemeinen war ich zufrieden.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Im Allgemeinen bin ich zufrieden gewesen",
        nebensatz: "",
        beispiel: "Im Allgemeinen bin ich zufrieden gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Im Allgemeinen war ich zufrieden gewesen",
        nebensatz: "",
        beispiel: "Im Allgemeinen war ich zufrieden gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Im Allgemeinen werde ich zufrieden sein",
        nebensatz: "",
        beispiel: "Im Allgemeinen werde ich zufrieden sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Im Allgemeinen werde ich zufrieden gewesen sein",
        nebensatz: "",
        beispiel: "Im Allgemeinen werde ich zufrieden gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Im Allgemeinen wäre ich zufrieden",
        nebensatz: "",
        beispiel: "Im Allgemeinen wäre ich zufrieden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "im Allgemeinen sei sie zufrieden",
        nebensatz: "",
        beispiel: "Sie sagt, im Allgemeinen sei sie zufrieden.",
      },
    ],
  },
  {
    kategorie: "ZUSAMMENFASSENDE KONNEKTOREN",
    konnektor: "kurz gesagt",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Kurz gesagt, ich bin dagegen",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich bin dagegen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Kurz gesagt, ich war dagegen",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich war dagegen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Kurz gesagt, ich bin dagegen gewesen",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich bin dagegen gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Kurz gesagt, ich war dagegen gewesen",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich war dagegen gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Kurz gesagt, ich werde dagegen sein",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich werde dagegen sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Kurz gesagt, ich werde dagegen gewesen sein",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich werde dagegen gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Kurz gesagt, ich wäre dagegen",
        nebensatz: "",
        beispiel: "Kurz gesagt, ich wäre dagegen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "kurz gesagt, er sei dagegen",
        nebensatz: "",
        beispiel: "Er sagt, kurz gesagt, er sei dagegen.",
      },
    ],
  },
  {
    kategorie: "BONUS: Weitere wichtige Konnektoren",
    konnektor: "je ... desto/umso",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Je mehr ich lerne",
        nebensatz: "desto besser wird mein Deutsch",
        beispiel: "Je mehr ich lerne, desto besser wird mein Deutsch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Je mehr ich lernte",
        nebensatz: "desto besser wurde mein Deutsch",
        beispiel: "Je mehr ich lernte, desto besser wurde mein Deutsch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Je mehr ich gelernt habe",
        nebensatz: "desto besser ist mein Deutsch geworden",
        beispiel:
          "Je mehr ich gelernt habe, desto besser ist mein Deutsch geworden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Je mehr ich gelernt hatte",
        nebensatz: "desto besser war mein Deutsch geworden",
        beispiel:
          "Je mehr ich gelernt hatte, desto besser war mein Deutsch geworden.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Je mehr ich lernen werde",
        nebensatz: "desto besser wird mein Deutsch werden",
        beispiel:
          "Je mehr ich lernen werde, desto besser wird mein Deutsch werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Je mehr ich gelernt haben werde",
        nebensatz: "desto besser wird mein Deutsch geworden sein",
        beispiel:
          "Je mehr ich gelernt haben werde, desto besser wird mein Deutsch geworden sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Je mehr ich lernen würde",
        nebensatz: "desto besser würde mein Deutsch werden",
        beispiel:
          "Je mehr ich lernen würde, desto besser würde mein Deutsch werden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "je mehr man lerne",
        nebensatz: "desto besser werde das Deutsch",
        beispiel:
          "Man sagt, je mehr man lerne, desto besser werde das Deutsch.",
      },
    ],
  },
  {
    kategorie: "BONUS: Weitere wichtige Konnektoren",
    konnektor: "nicht nur ... sondern auch",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich lerne nicht nur Deutsch",
        nebensatz: "sondern auch Französisch",
        beispiel: "Ich lerne nicht nur Deutsch, sondern auch Französisch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich lernte nicht nur Deutsch",
        nebensatz: "sondern auch Französisch",
        beispiel: "Ich lernte nicht nur Deutsch, sondern auch Französisch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe nicht nur Deutsch gelernt",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Ich habe nicht nur Deutsch gelernt, sondern auch Französisch.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte nicht nur Deutsch gelernt",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Ich hatte nicht nur Deutsch gelernt, sondern auch Französisch.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde nicht nur Deutsch lernen",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Ich werde nicht nur Deutsch lernen, sondern auch Französisch.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde nicht nur Deutsch gelernt haben",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Ich werde nicht nur Deutsch gelernt haben, sondern auch Französisch.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde nicht nur Deutsch lernen",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Ich würde nicht nur Deutsch lernen, sondern auch Französisch.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sie lerne nicht nur Deutsch",
        nebensatz: "sondern auch Französisch",
        beispiel:
          "Sie sagt, sie lerne nicht nur Deutsch, sondern auch Französisch.",
      },
    ],
  },
  {
    kategorie: "BONUS: Weitere wichtige Konnektoren",
    konnektor: "statt ... zu / anstatt",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "gehe ich spazieren",
        beispiel: "Statt zu arbeiten, gehe ich spazieren.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "ging ich spazieren",
        beispiel: "Statt zu arbeiten, ging ich spazieren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "bin ich spazieren gegangen",
        beispiel: "Statt zu arbeiten, bin ich spazieren gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "war ich spazieren gegangen",
        beispiel: "Statt zu arbeiten, war ich spazieren gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "werde ich spazieren gehen",
        beispiel: "Statt zu arbeiten, werde ich spazieren gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "werde ich spazieren gegangen sein",
        beispiel: "Statt zu arbeiten, werde ich spazieren gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Statt zu arbeiten",
        nebensatz: "würde ich spazieren gehen",
        beispiel: "Statt zu arbeiten, würde ich spazieren gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "statt zu arbeiten",
        nebensatz: "gehe er spazieren",
        beispiel: "Er sagt, statt zu arbeiten, gehe er spazieren.",
      },
    ],
  },
  {
    kategorie: "BONUS: Weitere wichtige Konnektoren",
    konnektor: "ohne ... zu",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er geht",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Er geht, ohne sich zu verabschieden.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er ging",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Er ging, ohne sich zu verabschieden.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er ist gegangen",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Er ist gegangen, ohne sich zu verabschieden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er war gegangen",
        nebensatz: "ohne sich verabschiedet zu haben",
        beispiel: "Er war gegangen, ohne sich verabschiedet zu haben.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird gehen",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Er wird gehen, ohne sich zu verabschieden.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird gegangen sein",
        nebensatz: "ohne sich verabschiedet zu haben",
        beispiel: "Er wird gegangen sein, ohne sich verabschiedet zu haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde gehen",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Er würde gehen, ohne sich zu verabschieden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er gehe",
        nebensatz: "ohne sich zu verabschieden",
        beispiel: "Man sagt, er gehe, ohne sich zu verabschieden.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "infolge + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Infolge des schlechten Wetters wird das Fest abgesagt",
        nebensatz: "",
        beispiel: "Infolge des schlechten Wetters wird das Fest abgesagt.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Infolge des schlechten Wetters wurde das Fest abgesagt",
        nebensatz: "",
        beispiel: "Infolge des schlechten Wetters wurde das Fest abgesagt.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Infolge des schlechten Wetters ist das Fest abgesagt worden",
        nebensatz: "",
        beispiel:
          "Infolge des schlechten Wetters ist das Fest abgesagt worden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Infolge des schlechten Wetters war das Fest abgesagt worden",
        nebensatz: "",
        beispiel:
          "Infolge des schlechten Wetters war das Fest abgesagt worden.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Infolge des schlechten Wetters wird das Fest abgesagt werden",
        nebensatz: "",
        beispiel:
          "Infolge des schlechten Wetters wird das Fest abgesagt werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Infolge des schlechten Wetters wird das Fest abgesagt worden sein",
        nebensatz: "",
        beispiel:
          "Infolge des schlechten Wetters wird das Fest abgesagt worden sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Infolge des schlechten Wetters würde das Fest abgesagt werden",
        nebensatz: "",
        beispiel:
          "Infolge des schlechten Wetters würde das Fest abgesagt werden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "infolge des schlechten Wetters werde das Fest abgesagt",
        nebensatz: "",
        beispiel:
          "Man sagt, infolge des schlechten Wetters werde das Fest abgesagt.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "aufgrund + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Aufgrund der hohen Nachfrage verlängern wir das Angebot",
        nebensatz: "",
        beispiel: "Aufgrund der hohen Nachfrage verlängern wir das Angebot.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Aufgrund der hohen Nachfrage verlängerten wir das Angebot",
        nebensatz: "",
        beispiel: "Aufgrund der hohen Nachfrage verlängerten wir das Angebot.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Aufgrund der hohen Nachfrage haben wir das Angebot verlängert",
        nebensatz: "",
        beispiel:
          "Aufgrund der hohen Nachfrage haben wir das Angebot verlängert.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Aufgrund der hohen Nachfrage hatten wir das Angebot verlängert",
        nebensatz: "",
        beispiel:
          "Aufgrund der hohen Nachfrage hatten wir das Angebot verlängert.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Aufgrund der hohen Nachfrage werden wir das Angebot verlängern",
        nebensatz: "",
        beispiel:
          "Aufgrund der hohen Nachfrage werden wir das Angebot verlängern.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Aufgrund der hohen Nachfrage werden wir das Angebot verlängert haben",
        nebensatz: "",
        beispiel:
          "Aufgrund der hohen Nachfrage werden wir das Angebot verlängert haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Aufgrund der hohen Nachfrage würden wir das Angebot verlängern",
        nebensatz: "",
        beispiel:
          "Aufgrund der hohen Nachfrage würden wir das Angebot verlängern.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "aufgrund der hohen Nachfrage verlängere man das Angebot",
        nebensatz: "",
        beispiel:
          "Man sagt, aufgrund der hohen Nachfrage verlängere man das Angebot.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "angesichts + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Angesichts der aktuellen Lage müssen wir umdenken",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage müssen wir umdenken.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Angesichts der aktuellen Lage mussten wir umdenken",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage mussten wir umdenken.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Angesichts der aktuellen Lage haben wir umdenken müssen",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage haben wir umdenken müssen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Angesichts der aktuellen Lage hatten wir umdenken müssen",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage hatten wir umdenken müssen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Angesichts der aktuellen Lage werden wir umdenken müssen",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage werden wir umdenken müssen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Angesichts der aktuellen Lage werden wir umgedacht haben müssen",
        nebensatz: "",
        beispiel:
          "Angesichts der aktuellen Lage werden wir umgedacht haben müssen.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Angesichts der aktuellen Lage müssten wir umdenken",
        nebensatz: "",
        beispiel: "Angesichts der aktuellen Lage müssten wir umdenken.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "angesichts der aktuellen Lage müsse man umdenken",
        nebensatz: "",
        beispiel: "Man sagt, angesichts der aktuellen Lage müsse man umdenken.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "zufolge + Dativ",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Den Berichten zufolge steigt die Inflation",
        nebensatz: "",
        beispiel: "Den Berichten zufolge steigt die Inflation.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Den Berichten zufolge stieg die Inflation",
        nebensatz: "",
        beispiel: "Den Berichten zufolge stieg die Inflation.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Den Berichten zufolge ist die Inflation gestiegen",
        nebensatz: "",
        beispiel: "Den Berichten zufolge ist die Inflation gestiegen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Den Berichten zufolge war die Inflation gestiegen",
        nebensatz: "",
        beispiel: "Den Berichten zufolge war die Inflation gestiegen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Den Berichten zufolge wird die Inflation steigen",
        nebensatz: "",
        beispiel: "Den Berichten zufolge wird die Inflation steigen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Den Berichten zufolge wird die Inflation gestiegen sein",
        nebensatz: "",
        beispiel: "Den Berichten zufolge wird die Inflation gestiegen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Den Berichten zufolge würde die Inflation steigen",
        nebensatz: "",
        beispiel: "Den Berichten zufolge würde die Inflation steigen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "Den Berichten zufolge steige die Inflation",
        nebensatz: "",
        beispiel: "Den Berichten zufolge steige die Inflation.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "dank + Genitiv/Dativ",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Dank seiner Hilfe können wir das Projekt abschließen",
        nebensatz: "",
        beispiel: "Dank seiner Hilfe können wir das Projekt abschließen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Dank seiner Hilfe konnten wir das Projekt abschließen",
        nebensatz: "",
        beispiel: "Dank seiner Hilfe konnten wir das Projekt abschließen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Dank seiner Hilfe haben wir das Projekt abschließen können",
        nebensatz: "",
        beispiel: "Dank seiner Hilfe haben wir das Projekt abschließen können.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Dank seiner Hilfe hatten wir das Projekt abschließen können",
        nebensatz: "",
        beispiel:
          "Dank seiner Hilfe hatten wir das Projekt abschließen können.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Dank seiner Hilfe werden wir das Projekt abschließen können",
        nebensatz: "",
        beispiel:
          "Dank seiner Hilfe werden wir das Projekt abschließen können.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Dank seiner Hilfe werden wir das Projekt abgeschlossen haben können",
        nebensatz: "",
        beispiel:
          "Dank seiner Hilfe werden wir das Projekt abgeschlossen haben können.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Dank seiner Hilfe könnten wir das Projekt abschließen",
        nebensatz: "",
        beispiel: "Dank seiner Hilfe könnten wir das Projekt abschließen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "dank seiner Hilfe könne man das Projekt abschließen",
        nebensatz: "",
        beispiel:
          "Man sagt, dank seiner Hilfe könne man das Projekt abschließen.",
      },
    ],
  },
  {
    kategorie: "KAUSALE KONNEKTOREN",
    konnektor: "mangels + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Mangels ausreichender Beweise wird er freigesprochen",
        nebensatz: "",
        beispiel: "Mangels ausreichender Beweise wird er freigesprochen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Mangels ausreichender Beweise wurde er freigesprochen",
        nebensatz: "",
        beispiel: "Mangels ausreichender Beweise wurde er freigesprochen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Mangels ausreichender Beweise ist er freigesprochen worden",
        nebensatz: "",
        beispiel: "Mangels ausreichender Beweise ist er freigesprochen worden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Mangels ausreichender Beweise war er freigesprochen worden",
        nebensatz: "",
        beispiel: "Mangels ausreichender Beweise war er freigesprochen worden.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Mangels ausreichender Beweise wird er freigesprochen werden",
        nebensatz: "",
        beispiel:
          "Mangels ausreichender Beweise wird er freigesprochen werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Mangels ausreichender Beweise wird er freigesprochen worden sein",
        nebensatz: "",
        beispiel:
          "Mangels ausreichender Beweise wird er freigesprochen worden sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Mangels ausreichender Beweise würde er freigesprochen werden",
        nebensatz: "",
        beispiel:
          "Mangels ausreichender Beweise würde er freigesprochen werden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "mangels ausreichender Beweise werde er freigesprochen",
        nebensatz: "",
        beispiel:
          "Man sagt, mangels ausreichender Beweise werde er freigesprochen.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "wenngleich",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "schaffen wir es",
        nebensatz: "wenngleich es schwierig ist",
        beispiel: "Wenngleich es schwierig ist, schaffen wir es.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "schafften wir es",
        nebensatz: "wenngleich es schwierig war",
        beispiel: "Wenngleich es schwierig war, schafften wir es.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "haben wir es geschafft",
        nebensatz: "wenngleich es schwierig gewesen ist",
        beispiel:
          "Wenngleich es schwierig gewesen ist, haben wir es geschafft.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatten wir es geschafft",
        nebensatz: "wenngleich es schwierig gewesen war",
        beispiel:
          "Wenngleich es schwierig gewesen war, hatten wir es geschafft.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir es schaffen",
        nebensatz: "wenngleich es schwierig sein wird",
        beispiel: "Wenngleich es schwierig sein wird, werden wir es schaffen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir es geschafft haben",
        nebensatz: "wenngleich es schwierig gewesen sein wird",
        beispiel:
          "Wenngleich es schwierig gewesen sein wird, werden wir es geschafft haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würden wir es schaffen",
        nebensatz: "wenngleich es schwierig wäre",
        beispiel: "Wenngleich es schwierig wäre, würden wir es schaffen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "schaffe man es",
        nebensatz: "wenngleich es schwierig sei",
        beispiel: "Man sagt, wenngleich es schwierig sei, schaffe man es.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "gleichwohl",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Aufgabe ist komplex",
        nebensatz: "gleichwohl meistern wir sie",
        beispiel: "Die Aufgabe ist komplex, gleichwohl meistern wir sie.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Aufgabe war komplex",
        nebensatz: "gleichwohl meisterten wir sie",
        beispiel: "Die Aufgabe war komplex, gleichwohl meisterten wir sie.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Aufgabe ist komplex gewesen",
        nebensatz: "gleichwohl haben wir sie gemeistert",
        beispiel:
          "Die Aufgabe ist komplex gewesen, gleichwohl haben wir sie gemeistert.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Aufgabe war komplex gewesen",
        nebensatz: "gleichwohl hatten wir sie gemeistert",
        beispiel:
          "Die Aufgabe war komplex gewesen, gleichwohl hatten wir sie gemeistert.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Aufgabe wird komplex sein",
        nebensatz: "gleichwohl werden wir sie meistern",
        beispiel:
          "Die Aufgabe wird komplex sein, gleichwohl werden wir sie meistern.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Aufgabe wird komplex gewesen sein",
        nebensatz: "gleichwohl werden wir sie gemeistert haben",
        beispiel:
          "Die Aufgabe wird komplex gewesen sein, gleichwohl werden wir sie gemeistert haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Aufgabe wäre komplex",
        nebensatz: "gleichwohl würden wir sie meistern",
        beispiel:
          "Die Aufgabe wäre komplex, gleichwohl würden wir sie meistern.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Aufgabe sei komplex",
        nebensatz: "gleichwohl meistere man sie",
        beispiel:
          "Man sagt, die Aufgabe sei komplex, gleichwohl meistere man sie.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "nichtsdestotrotz",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Es regnet stark",
        nebensatz: "nichtsdestotrotz gehen wir spazieren",
        beispiel: "Es regnet stark, nichtsdestotrotz gehen wir spazieren.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Es regnete stark",
        nebensatz: "nichtsdestotrotz gingen wir spazieren",
        beispiel: "Es regnete stark, nichtsdestotrotz gingen wir spazieren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Es hat stark geregnet",
        nebensatz: "nichtsdestotrotz sind wir spazieren gegangen",
        beispiel:
          "Es hat stark geregnet, nichtsdestotrotz sind wir spazieren gegangen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Es hatte stark geregnet",
        nebensatz: "nichtsdestotrotz waren wir spazieren gegangen",
        beispiel:
          "Es hatte stark geregnet, nichtsdestotrotz waren wir spazieren gegangen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Es wird stark regnen",
        nebensatz: "nichtsdestotrotz werden wir spazieren gehen",
        beispiel:
          "Es wird stark regnen, nichtsdestotrotz werden wir spazieren gehen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Es wird stark geregnet haben",
        nebensatz: "nichtsdestotrotz werden wir spazieren gegangen sein",
        beispiel:
          "Es wird stark geregnet haben, nichtsdestotrotz werden wir spazieren gegangen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Es würde stark regnen",
        nebensatz: "nichtsdestotrotz würden wir spazieren gehen",
        beispiel:
          "Es würde stark regnen, nichtsdestotrotz würden wir spazieren gehen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "es regne stark",
        nebensatz: "nichtsdestotrotz gehe man spazieren",
        beispiel:
          "Man sagt, es regne stark, nichtsdestotrotz gehe man spazieren.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "dessen ungeachtet",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Dessen ungeachtet setzt er seine Arbeit fort",
        nebensatz: "",
        beispiel: "Dessen ungeachtet setzt er seine Arbeit fort.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Dessen ungeachtet setzte er seine Arbeit fort",
        nebensatz: "",
        beispiel: "Dessen ungeachtet setzte er seine Arbeit fort.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Dessen ungeachtet hat er seine Arbeit fortgesetzt",
        nebensatz: "",
        beispiel: "Dessen ungeachtet hat er seine Arbeit fortgesetzt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Dessen ungeachtet hatte er seine Arbeit fortgesetzt",
        nebensatz: "",
        beispiel: "Dessen ungeachtet hatte er seine Arbeit fortgesetzt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Dessen ungeachtet wird er seine Arbeit fortsetzen",
        nebensatz: "",
        beispiel: "Dessen ungeachtet wird er seine Arbeit fortsetzen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Dessen ungeachtet wird er seine Arbeit fortgesetzt haben",
        nebensatz: "",
        beispiel: "Dessen ungeachtet wird er seine Arbeit fortgesetzt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Dessen ungeachtet würde er seine Arbeit fortsetzen",
        nebensatz: "",
        beispiel: "Dessen ungeachtet würde er seine Arbeit fortsetzen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "dessen ungeachtet setze er seine Arbeit fort",
        nebensatz: "",
        beispiel: "Man sagt, dessen ungeachtet setze er seine Arbeit fort.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "allerdings",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das Angebot ist gut",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Das Angebot ist gut, allerdings etwas teuer.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das Angebot war gut",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Das Angebot war gut, allerdings etwas teuer.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das Angebot ist gut gewesen",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Das Angebot ist gut gewesen, allerdings etwas teuer.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das Angebot war gut gewesen",
        nebensatz: "allerdings etwas teuer gewesen",
        beispiel:
          "Das Angebot war gut gewesen, allerdings etwas teuer gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das Angebot wird gut sein",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Das Angebot wird gut sein, allerdings etwas teuer.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das Angebot wird gut gewesen sein",
        nebensatz: "allerdings etwas teuer gewesen sein",
        beispiel:
          "Das Angebot wird gut gewesen sein, allerdings etwas teuer gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das Angebot wäre gut",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Das Angebot wäre gut, allerdings etwas teuer.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das Angebot sei gut",
        nebensatz: "allerdings etwas teuer",
        beispiel: "Man sagt, das Angebot sei gut, allerdings etwas teuer.",
      },
    ],
  },
  {
    kategorie: "KONZESSIVE KONNEKTOREN",
    konnektor: "freilich",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er ist intelligent",
        nebensatz: "freilich fehlt ihm die Erfahrung",
        beispiel: "Er ist intelligent, freilich fehlt ihm die Erfahrung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er war intelligent",
        nebensatz: "freilich fehlte ihm die Erfahrung",
        beispiel: "Er war intelligent, freilich fehlte ihm die Erfahrung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er ist intelligent gewesen",
        nebensatz: "freilich hat ihm die Erfahrung gefehlt",
        beispiel:
          "Er ist intelligent gewesen, freilich hat ihm die Erfahrung gefehlt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er war intelligent gewesen",
        nebensatz: "freilich hatte ihm die Erfahrung gefehlt",
        beispiel:
          "Er war intelligent gewesen, freilich hatte ihm die Erfahrung gefehlt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird intelligent sein",
        nebensatz: "freilich wird ihm die Erfahrung fehlen",
        beispiel:
          "Er wird intelligent sein, freilich wird ihm die Erfahrung fehlen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird intelligent gewesen sein",
        nebensatz: "freilich wird ihm die Erfahrung gefehlt haben",
        beispiel:
          "Er wird intelligent gewesen sein, freilich wird ihm die Erfahrung gefehlt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er wäre intelligent",
        nebensatz: "freilich würde ihm die Erfahrung fehlen",
        beispiel:
          "Er wäre intelligent, freilich würde ihm die Erfahrung fehlen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er sei intelligent",
        nebensatz: "freilich fehle ihm die Erfahrung",
        beispiel:
          "Man sagt, er sei intelligent, freilich fehle ihm die Erfahrung.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "infolgedessen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Es regnet stark",
        nebensatz: "infolgedessen wird die Straße überflutet",
        beispiel: "Es regnet stark, infolgedessen wird die Straße überflutet.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Es regnete stark",
        nebensatz: "infolgedessen wurde die Straße überflutet",
        beispiel:
          "Es regnete stark, infolgedessen wurde die Straße überflutet.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Es hat stark geregnet",
        nebensatz: "infolgedessen ist die Straße überflutet worden",
        beispiel:
          "Es hat stark geregnet, infolgedessen ist die Straße überflutet worden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Es hatte stark geregnet",
        nebensatz: "infolgedessen war die Straße überflutet worden",
        beispiel:
          "Es hatte stark geregnet, infolgedessen war die Straße überflutet worden.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Es wird stark regnen",
        nebensatz: "infolgedessen wird die Straße überflutet werden",
        beispiel:
          "Es wird stark regnen, infolgedessen wird die Straße überflutet werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Es wird stark geregnet haben",
        nebensatz: "infolgedessen wird die Straße überflutet worden sein",
        beispiel:
          "Es wird stark geregnet haben, infolgedessen wird die Straße überflutet worden sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Es würde stark regnen",
        nebensatz: "infolgedessen würde die Straße überflutet werden",
        beispiel:
          "Es würde stark regnen, infolgedessen würde die Straße überflutet werden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "es regne stark",
        nebensatz: "infolgedessen werde die Straße überflutet",
        beispiel:
          "Man sagt, es regne stark, infolgedessen werde die Straße überflutet.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "demzufolge",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Nachfrage steigt",
        nebensatz: "demzufolge erhöhen wir die Produktion",
        beispiel:
          "Die Nachfrage steigt, demzufolge erhöhen wir die Produktion.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Nachfrage stieg",
        nebensatz: "demzufolge erhöhten wir die Produktion",
        beispiel:
          "Die Nachfrage stieg, demzufolge erhöhten wir die Produktion.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Nachfrage ist gestiegen",
        nebensatz: "demzufolge haben wir die Produktion erhöht",
        beispiel:
          "Die Nachfrage ist gestiegen, demzufolge haben wir die Produktion erhöht.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Nachfrage war gestiegen",
        nebensatz: "demzufolge hatten wir die Produktion erhöht",
        beispiel:
          "Die Nachfrage war gestiegen, demzufolge hatten wir die Produktion erhöht.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Nachfrage wird steigen",
        nebensatz: "demzufolge werden wir die Produktion erhöhen",
        beispiel:
          "Die Nachfrage wird steigen, demzufolge werden wir die Produktion erhöhen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Nachfrage wird gestiegen sein",
        nebensatz: "demzufolge werden wir die Produktion erhöht haben",
        beispiel:
          "Die Nachfrage wird gestiegen sein, demzufolge werden wir die Produktion erhöht haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Nachfrage würde steigen",
        nebensatz: "demzufolge würden wir die Produktion erhöhen",
        beispiel:
          "Die Nachfrage würde steigen, demzufolge würden wir die Produktion erhöhen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Nachfrage steige",
        nebensatz: "demzufolge erhöhe man die Produktion",
        beispiel:
          "Man sagt, die Nachfrage steige, demzufolge erhöhe man die Produktion.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "demnach",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Ergebnisse sind positiv",
        nebensatz: "demnach können wir weitermachen",
        beispiel:
          "Die Ergebnisse sind positiv, demnach können wir weitermachen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Ergebnisse waren positiv",
        nebensatz: "demnach konnten wir weitermachen",
        beispiel:
          "Die Ergebnisse waren positiv, demnach konnten wir weitermachen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Ergebnisse sind positiv gewesen",
        nebensatz: "demnach haben wir weitermachen können",
        beispiel:
          "Die Ergebnisse sind positiv gewesen, demnach haben wir weitermachen können.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Ergebnisse waren positiv gewesen",
        nebensatz: "demnach hatten wir weitermachen können",
        beispiel:
          "Die Ergebnisse waren positiv gewesen, demnach hatten wir weitermachen können.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Ergebnisse werden positiv sein",
        nebensatz: "demnach werden wir weitermachen können",
        beispiel:
          "Die Ergebnisse werden positiv sein, demnach werden wir weitermachen können.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Ergebnisse werden positiv gewesen sein",
        nebensatz: "demnach werden wir weitergemacht haben können",
        beispiel:
          "Die Ergebnisse werden positiv gewesen sein, demnach werden wir weitergemacht haben können.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Ergebnisse wären positiv",
        nebensatz: "demnach könnten wir weitermachen",
        beispiel:
          "Die Ergebnisse wären positiv, demnach könnten wir weitermachen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Ergebnisse seien positiv",
        nebensatz: "demnach könne man weitermachen",
        beispiel:
          "Man sagt, die Ergebnisse seien positiv, demnach könne man weitermachen.",
      },
    ],
  },
  {
    kategorie: "KONSEKUTIVE KONNEKTOREN",
    konnektor: "mithin",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Beweise sind eindeutig",
        nebensatz: "mithin ist er schuldig",
        beispiel: "Die Beweise sind eindeutig, mithin ist er schuldig.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Beweise waren eindeutig",
        nebensatz: "mithin war er schuldig",
        beispiel: "Die Beweise waren eindeutig, mithin war er schuldig.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Beweise sind eindeutig gewesen",
        nebensatz: "mithin ist er schuldig gewesen",
        beispiel:
          "Die Beweise sind eindeutig gewesen, mithin ist er schuldig gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Beweise waren eindeutig gewesen",
        nebensatz: "mithin war er schuldig gewesen",
        beispiel:
          "Die Beweise waren eindeutig gewesen, mithin war er schuldig gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Beweise werden eindeutig sein",
        nebensatz: "mithin wird er schuldig sein",
        beispiel:
          "Die Beweise werden eindeutig sein, mithin wird er schuldig sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Beweise werden eindeutig gewesen sein",
        nebensatz: "mithin wird er schuldig gewesen sein",
        beispiel:
          "Die Beweise werden eindeutig gewesen sein, mithin wird er schuldig gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Beweise wären eindeutig",
        nebensatz: "mithin wäre er schuldig",
        beispiel: "Die Beweise wären eindeutig, mithin wäre er schuldig.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Beweise seien eindeutig",
        nebensatz: "mithin sei er schuldig",
        beispiel:
          "Man sagt, die Beweise seien eindeutig, mithin sei er schuldig.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "dagegen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich mag Kaffee",
        nebensatz: "dagegen trinkt sie lieber Tee",
        beispiel: "Ich mag Kaffee, dagegen trinkt sie lieber Tee.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich mochte Kaffee",
        nebensatz: "dagegen trank sie lieber Tee",
        beispiel: "Ich mochte Kaffee, dagegen trank sie lieber Tee.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich habe Kaffee gemocht",
        nebensatz: "dagegen hat sie lieber Tee getrunken",
        beispiel:
          "Ich habe Kaffee gemocht, dagegen hat sie lieber Tee getrunken.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich hatte Kaffee gemocht",
        nebensatz: "dagegen hatte sie lieber Tee getrunken",
        beispiel:
          "Ich hatte Kaffee gemocht, dagegen hatte sie lieber Tee getrunken.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde Kaffee mögen",
        nebensatz: "dagegen wird sie lieber Tee trinken",
        beispiel:
          "Ich werde Kaffee mögen, dagegen wird sie lieber Tee trinken.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde Kaffee gemocht haben",
        nebensatz: "dagegen wird sie lieber Tee getrunken haben",
        beispiel:
          "Ich werde Kaffee gemocht haben, dagegen wird sie lieber Tee getrunken haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde Kaffee mögen",
        nebensatz: "dagegen würde sie lieber Tee trinken",
        beispiel:
          "Ich würde Kaffee mögen, dagegen würde sie lieber Tee trinken.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "ich möge Kaffee",
        nebensatz: "dagegen trinke sie lieber Tee",
        beispiel: "Man sagt, ich möge Kaffee, dagegen trinke sie lieber Tee.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "demgegenüber",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Kosten steigen",
        nebensatz: "demgegenüber sinken die Einnahmen",
        beispiel: "Die Kosten steigen, demgegenüber sinken die Einnahmen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Kosten stiegen",
        nebensatz: "demgegenüber sanken die Einnahmen",
        beispiel: "Die Kosten stiegen, demgegenüber sanken die Einnahmen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Kosten sind gestiegen",
        nebensatz: "demgegenüber sind die Einnahmen gesunken",
        beispiel:
          "Die Kosten sind gestiegen, demgegenüber sind die Einnahmen gesunken.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Kosten waren gestiegen",
        nebensatz: "demgegenüber waren die Einnahmen gesunken",
        beispiel:
          "Die Kosten waren gestiegen, demgegenüber waren die Einnahmen gesunken.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Kosten werden steigen",
        nebensatz: "demgegenüber werden die Einnahmen sinken",
        beispiel:
          "Die Kosten werden steigen, demgegenüber werden die Einnahmen sinken.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Kosten werden gestiegen sein",
        nebensatz: "demgegenüber werden die Einnahmen gesunken sein",
        beispiel:
          "Die Kosten werden gestiegen sein, demgegenüber werden die Einnahmen gesunken sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Kosten würden steigen",
        nebensatz: "demgegenüber würden die Einnahmen sinken",
        beispiel:
          "Die Kosten würden steigen, demgegenüber würden die Einnahmen sinken.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Kosten stiegen",
        nebensatz: "demgegenüber sänken die Einnahmen",
        beispiel:
          "Man sagt, die Kosten stiegen, demgegenüber sänken die Einnahmen.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "indessen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er arbeitet",
        nebensatz: "indessen schläft sie",
        beispiel: "Er arbeitet, indessen schläft sie.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er arbeitete",
        nebensatz: "indessen schlief sie",
        beispiel: "Er arbeitete, indessen schlief sie.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat gearbeitet",
        nebensatz: "indessen hat sie geschlafen",
        beispiel: "Er hat gearbeitet, indessen hat sie geschlafen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte gearbeitet",
        nebensatz: "indessen hatte sie geschlafen",
        beispiel: "Er hatte gearbeitet, indessen hatte sie geschlafen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird arbeiten",
        nebensatz: "indessen wird sie schlafen",
        beispiel: "Er wird arbeiten, indessen wird sie schlafen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird gearbeitet haben",
        nebensatz: "indessen wird sie geschlafen haben",
        beispiel:
          "Er wird gearbeitet haben, indessen wird sie geschlafen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde arbeiten",
        nebensatz: "indessen würde sie schlafen",
        beispiel: "Er würde arbeiten, indessen würde sie schlafen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er arbeite",
        nebensatz: "indessen schlafe sie",
        beispiel: "Man sagt, er arbeite, indessen schlafe sie.",
      },
    ],
  },
  {
    kategorie: "ADVERSATIVE KONNEKTOREN",
    konnektor: "vielmehr",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Es geht nicht um Geld",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es geht nicht um Geld, vielmehr um Prinzipien.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Es ging nicht um Geld",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es ging nicht um Geld, vielmehr um Prinzipien.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Es ist nicht um Geld gegangen",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es ist nicht um Geld gegangen, vielmehr um Prinzipien.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Es war nicht um Geld gegangen",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es war nicht um Geld gegangen, vielmehr um Prinzipien.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Es wird nicht um Geld gehen",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es wird nicht um Geld gehen, vielmehr um Prinzipien.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Es wird nicht um Geld gegangen sein",
        nebensatz: "vielmehr um Prinzipien",
        beispiel:
          "Es wird nicht um Geld gegangen sein, vielmehr um Prinzipien.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Es würde nicht um Geld gehen",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Es würde nicht um Geld gehen, vielmehr um Prinzipien.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "es gehe nicht um Geld",
        nebensatz: "vielmehr um Prinzipien",
        beispiel: "Man sagt, es gehe nicht um Geld, vielmehr um Prinzipien.",
      },
    ],
  },
  {
    kategorie: "FINALE KONNEKTOREN",
    konnektor: "zwecks + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Zwecks besserer Übersicht erstellen wir eine Tabelle",
        nebensatz: "",
        beispiel: "Zwecks besserer Übersicht erstellen wir eine Tabelle.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Zwecks besserer Übersicht erstellten wir eine Tabelle",
        nebensatz: "",
        beispiel: "Zwecks besserer Übersicht erstellten wir eine Tabelle.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Zwecks besserer Übersicht haben wir eine Tabelle erstellt",
        nebensatz: "",
        beispiel: "Zwecks besserer Übersicht haben wir eine Tabelle erstellt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Zwecks besserer Übersicht hatten wir eine Tabelle erstellt",
        nebensatz: "",
        beispiel: "Zwecks besserer Übersicht hatten wir eine Tabelle erstellt.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Zwecks besserer Übersicht werden wir eine Tabelle erstellen",
        nebensatz: "",
        beispiel:
          "Zwecks besserer Übersicht werden wir eine Tabelle erstellen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Zwecks besserer Übersicht werden wir eine Tabelle erstellt haben",
        nebensatz: "",
        beispiel:
          "Zwecks besserer Übersicht werden wir eine Tabelle erstellt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Zwecks besserer Übersicht würden wir eine Tabelle erstellen",
        nebensatz: "",
        beispiel:
          "Zwecks besserer Übersicht würden wir eine Tabelle erstellen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "zwecks besserer Übersicht erstelle man eine Tabelle",
        nebensatz: "",
        beispiel:
          "Man sagt, zwecks besserer Übersicht erstelle man eine Tabelle.",
      },
    ],
  },
  {
    kategorie: "FINALE KONNEKTOREN",
    konnektor: "behufs + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Behufs der Klärung laden wir Sie ein",
        nebensatz: "",
        beispiel: "Behufs der Klärung laden wir Sie ein.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Behufs der Klärung luden wir Sie ein",
        nebensatz: "",
        beispiel: "Behufs der Klärung luden wir Sie ein.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Behufs der Klärung haben wir Sie eingeladen",
        nebensatz: "",
        beispiel: "Behufs der Klärung haben wir Sie eingeladen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Behufs der Klärung hatten wir Sie eingeladen",
        nebensatz: "",
        beispiel: "Behufs der Klärung hatten wir Sie eingeladen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Behufs der Klärung werden wir Sie einladen",
        nebensatz: "",
        beispiel: "Behufs der Klärung werden wir Sie einladen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Behufs der Klärung werden wir Sie eingeladen haben",
        nebensatz: "",
        beispiel: "Behufs der Klärung werden wir Sie eingeladen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Behufs der Klärung würden wir Sie einladen",
        nebensatz: "",
        beispiel: "Behufs der Klärung würden wir Sie einladen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "behufs der Klärung lade man Sie ein",
        nebensatz: "",
        beispiel: "Man sagt, behufs der Klärung lade man Sie ein.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "insofern",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "können wir beginnen",
        nebensatz: "insofern Sie einverstanden sind",
        beispiel: "Insofern Sie einverstanden sind, können wir beginnen.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "konnten wir beginnen",
        nebensatz: "insofern Sie einverstanden waren",
        beispiel: "Insofern Sie einverstanden waren, konnten wir beginnen.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "haben wir beginnen können",
        nebensatz: "insofern Sie einverstanden gewesen sind",
        beispiel:
          "Insofern Sie einverstanden gewesen sind, haben wir beginnen können.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatten wir beginnen können",
        nebensatz: "insofern Sie einverstanden gewesen waren",
        beispiel:
          "Insofern Sie einverstanden gewesen waren, hatten wir beginnen können.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir beginnen können",
        nebensatz: "insofern Sie einverstanden sein werden",
        beispiel:
          "Insofern Sie einverstanden sein werden, werden wir beginnen können.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir begonnen haben können",
        nebensatz: "insofern Sie einverstanden gewesen sein werden",
        beispiel:
          "Insofern Sie einverstanden gewesen sein werden, werden wir begonnen haben können.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "könnten wir beginnen",
        nebensatz: "insofern Sie einverstanden wären",
        beispiel: "Insofern Sie einverstanden wären, könnten wir beginnen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "könne man beginnen",
        nebensatz: "insofern Sie einverstanden seien",
        beispiel:
          "Man sagt, insofern Sie einverstanden seien, könne man beginnen.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "insoweit",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "ist alles in Ordnung",
        nebensatz: "insoweit ich informiert bin",
        beispiel: "Insoweit ich informiert bin, ist alles in Ordnung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "war alles in Ordnung",
        nebensatz: "insoweit ich informiert war",
        beispiel: "Insoweit ich informiert war, war alles in Ordnung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "ist alles in Ordnung gewesen",
        nebensatz: "insoweit ich informiert gewesen bin",
        beispiel:
          "Insoweit ich informiert gewesen bin, ist alles in Ordnung gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war alles in Ordnung gewesen",
        nebensatz: "insoweit ich informiert gewesen war",
        beispiel:
          "Insoweit ich informiert gewesen war, war alles in Ordnung gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "wird alles in Ordnung sein",
        nebensatz: "insoweit ich informiert sein werde",
        beispiel:
          "Insoweit ich informiert sein werde, wird alles in Ordnung sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "wird alles in Ordnung gewesen sein",
        nebensatz: "insoweit ich informiert gewesen sein werde",
        beispiel:
          "Insoweit ich informiert gewesen sein werde, wird alles in Ordnung gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "wäre alles in Ordnung",
        nebensatz: "insoweit ich informiert wäre",
        beispiel: "Insoweit ich informiert wäre, wäre alles in Ordnung.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sei alles in Ordnung",
        nebensatz: "insoweit man informiert sei",
        beispiel:
          "Man sagt, insoweit man informiert sei, sei alles in Ordnung.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "gewissermaßen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das ist gewissermaßen eine Revolution",
        nebensatz: "",
        beispiel: "Das ist gewissermaßen eine Revolution.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das war gewissermaßen eine Revolution",
        nebensatz: "",
        beispiel: "Das war gewissermaßen eine Revolution.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das ist gewissermaßen eine Revolution gewesen",
        nebensatz: "",
        beispiel: "Das ist gewissermaßen eine Revolution gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das war gewissermaßen eine Revolution gewesen",
        nebensatz: "",
        beispiel: "Das war gewissermaßen eine Revolution gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das wird gewissermaßen eine Revolution sein",
        nebensatz: "",
        beispiel: "Das wird gewissermaßen eine Revolution sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das wird gewissermaßen eine Revolution gewesen sein",
        nebensatz: "",
        beispiel: "Das wird gewissermaßen eine Revolution gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das wäre gewissermaßen eine Revolution",
        nebensatz: "",
        beispiel: "Das wäre gewissermaßen eine Revolution.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das sei gewissermaßen eine Revolution",
        nebensatz: "",
        beispiel: "Man sagt, das sei gewissermaßen eine Revolution.",
      },
    ],
  },
  {
    kategorie: "MODALE KONNEKTOREN",
    konnektor: "sozusagen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er ist sozusagen der Chef hier",
        nebensatz: "",
        beispiel: "Er ist sozusagen der Chef hier.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er war sozusagen der Chef hier",
        nebensatz: "",
        beispiel: "Er war sozusagen der Chef hier.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er ist sozusagen der Chef hier gewesen",
        nebensatz: "",
        beispiel: "Er ist sozusagen der Chef hier gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er war sozusagen der Chef hier gewesen",
        nebensatz: "",
        beispiel: "Er war sozusagen der Chef hier gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird sozusagen der Chef hier sein",
        nebensatz: "",
        beispiel: "Er wird sozusagen der Chef hier sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird sozusagen der Chef hier gewesen sein",
        nebensatz: "",
        beispiel: "Er wird sozusagen der Chef hier gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er wäre sozusagen der Chef hier",
        nebensatz: "",
        beispiel: "Er wäre sozusagen der Chef hier.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er sei sozusagen der Chef hier",
        nebensatz: "",
        beispiel: "Man sagt, er sei sozusagen der Chef hier.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "inzwischen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Inzwischen verbessert sich die Situation",
        nebensatz: "",
        beispiel: "Inzwischen verbessert sich die Situation.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Inzwischen verbesserte sich die Situation",
        nebensatz: "",
        beispiel: "Inzwischen verbesserte sich die Situation.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Inzwischen hat sich die Situation verbessert",
        nebensatz: "",
        beispiel: "Inzwischen hat sich die Situation verbessert.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Inzwischen hatte sich die Situation verbessert",
        nebensatz: "",
        beispiel: "Inzwischen hatte sich die Situation verbessert.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Inzwischen wird sich die Situation verbessern",
        nebensatz: "",
        beispiel: "Inzwischen wird sich die Situation verbessern.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Inzwischen wird sich die Situation verbessert haben",
        nebensatz: "",
        beispiel: "Inzwischen wird sich die Situation verbessert haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Inzwischen würde sich die Situation verbessern",
        nebensatz: "",
        beispiel: "Inzwischen würde sich die Situation verbessern.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "inzwischen verbessere sich die Situation",
        nebensatz: "",
        beispiel: "Man sagt, inzwischen verbessere sich die Situation.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "währenddessen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Er kocht",
        nebensatz: "währenddessen deckt sie den Tisch",
        beispiel: "Er kocht, währenddessen deckt sie den Tisch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Er kochte",
        nebensatz: "währenddessen deckte sie den Tisch",
        beispiel: "Er kochte, währenddessen deckte sie den Tisch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Er hat gekocht",
        nebensatz: "währenddessen hat sie den Tisch gedeckt",
        beispiel: "Er hat gekocht, währenddessen hat sie den Tisch gedeckt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Er hatte gekocht",
        nebensatz: "währenddessen hatte sie den Tisch gedeckt",
        beispiel:
          "Er hatte gekocht, währenddessen hatte sie den Tisch gedeckt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Er wird kochen",
        nebensatz: "währenddessen wird sie den Tisch decken",
        beispiel: "Er wird kochen, währenddessen wird sie den Tisch decken.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Er wird gekocht haben",
        nebensatz: "währenddessen wird sie den Tisch gedeckt haben",
        beispiel:
          "Er wird gekocht haben, währenddessen wird sie den Tisch gedeckt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Er würde kochen",
        nebensatz: "währenddessen würde sie den Tisch decken",
        beispiel: "Er würde kochen, währenddessen würde sie den Tisch decken.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "er koche",
        nebensatz: "währenddessen decke sie den Tisch",
        beispiel: "Man sagt, er koche, währenddessen decke sie den Tisch.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "unterdessen",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Die Arbeiten dauern an",
        nebensatz: "unterdessen warten wir",
        beispiel: "Die Arbeiten dauern an, unterdessen warten wir.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Die Arbeiten dauerten an",
        nebensatz: "unterdessen warteten wir",
        beispiel: "Die Arbeiten dauerten an, unterdessen warteten wir.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Die Arbeiten haben angedauert",
        nebensatz: "unterdessen haben wir gewartet",
        beispiel:
          "Die Arbeiten haben angedauert, unterdessen haben wir gewartet.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Die Arbeiten hatten angedauert",
        nebensatz: "unterdessen hatten wir gewartet",
        beispiel:
          "Die Arbeiten hatten angedauert, unterdessen hatten wir gewartet.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Die Arbeiten werden andauern",
        nebensatz: "unterdessen werden wir warten",
        beispiel:
          "Die Arbeiten werden andauern, unterdessen werden wir warten.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Die Arbeiten werden angedauert haben",
        nebensatz: "unterdessen werden wir gewartet haben",
        beispiel:
          "Die Arbeiten werden angedauert haben, unterdessen werden wir gewartet haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Die Arbeiten würden andauern",
        nebensatz: "unterdessen würden wir warten",
        beispiel:
          "Die Arbeiten würden andauern, unterdessen würden wir warten.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "die Arbeiten dauerten an",
        nebensatz: "unterdessen warte man",
        beispiel: "Man sagt, die Arbeiten dauerten an, unterdessen warte man.",
      },
    ],
  },
  {
    kategorie: "TEMPORALE KONNEKTOREN",
    konnektor: "alsbald",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Wir finden alsbald eine Lösung",
        nebensatz: "",
        beispiel: "Wir finden alsbald eine Lösung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Wir fanden alsbald eine Lösung",
        nebensatz: "",
        beispiel: "Wir fanden alsbald eine Lösung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Wir haben alsbald eine Lösung gefunden",
        nebensatz: "",
        beispiel: "Wir haben alsbald eine Lösung gefunden.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Wir hatten alsbald eine Lösung gefunden",
        nebensatz: "",
        beispiel: "Wir hatten alsbald eine Lösung gefunden.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Wir werden alsbald eine Lösung finden",
        nebensatz: "",
        beispiel: "Wir werden alsbald eine Lösung finden.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Wir werden alsbald eine Lösung gefunden haben",
        nebensatz: "",
        beispiel: "Wir werden alsbald eine Lösung gefunden haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Wir würden alsbald eine Lösung finden",
        nebensatz: "",
        beispiel: "Wir würden alsbald eine Lösung finden.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "man finde alsbald eine Lösung",
        nebensatz: "",
        beispiel: "Man sagt, man finde alsbald eine Lösung.",
      },
    ],
  },
  {
    kategorie: "RESTRIKTIVE KONNEKTOREN",
    konnektor: "insofern als",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das stimmt",
        nebensatz: "insofern als die Daten korrekt sind",
        beispiel: "Das stimmt, insofern als die Daten korrekt sind.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das stimmte",
        nebensatz: "insofern als die Daten korrekt waren",
        beispiel: "Das stimmte, insofern als die Daten korrekt waren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das hat gestimmt",
        nebensatz: "insofern als die Daten korrekt gewesen sind",
        beispiel:
          "Das hat gestimmt, insofern als die Daten korrekt gewesen sind.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das hatte gestimmt",
        nebensatz: "insofern als die Daten korrekt gewesen waren",
        beispiel:
          "Das hatte gestimmt, insofern als die Daten korrekt gewesen waren.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das wird stimmen",
        nebensatz: "insofern als die Daten korrekt sein werden",
        beispiel:
          "Das wird stimmen, insofern als die Daten korrekt sein werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das wird gestimmt haben",
        nebensatz: "insofern als die Daten korrekt gewesen sein werden",
        beispiel:
          "Das wird gestimmt haben, insofern als die Daten korrekt gewesen sein werden.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das würde stimmen",
        nebensatz: "insofern als die Daten korrekt wären",
        beispiel: "Das würde stimmen, insofern als die Daten korrekt wären.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das stimme",
        nebensatz: "insofern als die Daten korrekt seien",
        beispiel: "Man sagt, das stimme, insofern als die Daten korrekt seien.",
      },
    ],
  },
  {
    kategorie: "RESTRIKTIVE KONNEKTOREN",
    konnektor: "soweit",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "ist das richtig",
        nebensatz: "soweit ich weiß",
        beispiel: "Soweit ich weiß, ist das richtig.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "war das richtig",
        nebensatz: "soweit ich wusste",
        beispiel: "Soweit ich wusste, war das richtig.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "ist das richtig gewesen",
        nebensatz: "soweit ich gewusst habe",
        beispiel: "Soweit ich gewusst habe, ist das richtig gewesen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "war das richtig gewesen",
        nebensatz: "soweit ich gewusst hatte",
        beispiel: "Soweit ich gewusst hatte, war das richtig gewesen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "wird das richtig sein",
        nebensatz: "soweit ich wissen werde",
        beispiel: "Soweit ich wissen werde, wird das richtig sein.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "wird das richtig gewesen sein",
        nebensatz: "soweit ich gewusst haben werde",
        beispiel:
          "Soweit ich gewusst haben werde, wird das richtig gewesen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "wäre das richtig",
        nebensatz: "soweit ich wüsste",
        beispiel: "Soweit ich wüsste, wäre das richtig.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "sei das richtig",
        nebensatz: "soweit man wisse",
        beispiel: "Man sagt, soweit man wisse, sei das richtig.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "andernfalls",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Beeilen Sie sich",
        nebensatz: "andernfalls verpassen Sie den Zug",
        beispiel: "Beeilen Sie sich, andernfalls verpassen Sie den Zug.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Sie beeilten sich",
        nebensatz: "andernfalls verpassten Sie den Zug",
        beispiel: "Sie beeilten sich, andernfalls verpassten Sie den Zug.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Sie haben sich beeilt",
        nebensatz: "andernfalls haben Sie den Zug verpasst",
        beispiel:
          "Sie haben sich beeilt, andernfalls haben Sie den Zug verpasst.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Sie hatten sich beeilt",
        nebensatz: "andernfalls hatten Sie den Zug verpasst",
        beispiel:
          "Sie hatten sich beeilt, andernfalls hatten Sie den Zug verpasst.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Sie werden sich beeilen",
        nebensatz: "andernfalls werden Sie den Zug verpassen",
        beispiel:
          "Sie werden sich beeilen, andernfalls werden Sie den Zug verpassen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Sie werden sich beeilt haben",
        nebensatz: "andernfalls werden Sie den Zug verpasst haben",
        beispiel:
          "Sie werden sich beeilt haben, andernfalls werden Sie den Zug verpasst haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Sie würden sich beeilen",
        nebensatz: "andernfalls würden Sie den Zug verpassen",
        beispiel:
          "Sie würden sich beeilen, andernfalls würden Sie den Zug verpassen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "man beeile sich",
        nebensatz: "andernfalls verpasse man den Zug",
        beispiel:
          "Man sagt, man beeile sich, andernfalls verpasse man den Zug.",
      },
    ],
  },
  {
    kategorie: "ALTERNATIVE KONNEKTOREN",
    konnektor: "ansonsten",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Zahlen Sie pünktlich",
        nebensatz: "ansonsten fallen Gebühren an",
        beispiel: "Zahlen Sie pünktlich, ansonsten fallen Gebühren an.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Sie zahlten pünktlich",
        nebensatz: "ansonsten fielen Gebühren an",
        beispiel: "Sie zahlten pünktlich, ansonsten fielen Gebühren an.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Sie haben pünktlich gezahlt",
        nebensatz: "ansonsten sind Gebühren angefallen",
        beispiel:
          "Sie haben pünktlich gezahlt, ansonsten sind Gebühren angefallen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Sie hatten pünktlich gezahlt",
        nebensatz: "ansonsten waren Gebühren angefallen",
        beispiel:
          "Sie hatten pünktlich gezahlt, ansonsten waren Gebühren angefallen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Sie werden pünktlich zahlen",
        nebensatz: "ansonsten werden Gebühren anfallen",
        beispiel:
          "Sie werden pünktlich zahlen, ansonsten werden Gebühren anfallen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Sie werden pünktlich gezahlt haben",
        nebensatz: "ansonsten werden Gebühren angefallen sein",
        beispiel:
          "Sie werden pünktlich gezahlt haben, ansonsten werden Gebühren angefallen sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Sie würden pünktlich zahlen",
        nebensatz: "ansonsten würden Gebühren anfallen",
        beispiel:
          "Sie würden pünktlich zahlen, ansonsten würden Gebühren anfallen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "man zahle pünktlich",
        nebensatz: "ansonsten fielen Gebühren an",
        beispiel:
          "Man sagt, man zahle pünktlich, ansonsten fielen Gebühren an.",
      },
    ],
  },
  {
    kategorie: "ZUSAMMENFASSENDE KONNEKTOREN",
    konnektor: "kurzum",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Kurzum, wir müssen handeln",
        nebensatz: "",
        beispiel: "Kurzum, wir müssen handeln.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Kurzum, wir mussten handeln",
        nebensatz: "",
        beispiel: "Kurzum, wir mussten handeln.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Kurzum, wir haben handeln müssen",
        nebensatz: "",
        beispiel: "Kurzum, wir haben handeln müssen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Kurzum, wir hatten handeln müssen",
        nebensatz: "",
        beispiel: "Kurzum, wir hatten handeln müssen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Kurzum, wir werden handeln müssen",
        nebensatz: "",
        beispiel: "Kurzum, wir werden handeln müssen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Kurzum, wir werden gehandelt haben müssen",
        nebensatz: "",
        beispiel: "Kurzum, wir werden gehandelt haben müssen.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Kurzum, wir müssten handeln",
        nebensatz: "",
        beispiel: "Kurzum, wir müssten handeln.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "kurzum, man müsse handeln",
        nebensatz: "",
        beispiel: "Man sagt, kurzum, man müsse handeln.",
      },
    ],
  },
  {
    kategorie: "ZUSAMMENFASSENDE KONNEKTOREN",
    konnektor: "zusammenfassend",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz:
          "Zusammenfassend lässt sich sagen, dass wir erfolgreich sind",
        nebensatz: "",
        beispiel:
          "Zusammenfassend lässt sich sagen, dass wir erfolgreich sind.",
      },
      {
        zeit: "Präteritum",
        hauptsatz:
          "Zusammenfassend ließ sich sagen, dass wir erfolgreich waren",
        nebensatz: "",
        beispiel:
          "Zusammenfassend ließ sich sagen, dass wir erfolgreich waren.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Zusammenfassend hat sich sagen lassen, dass wir erfolgreich gewesen sind",
        nebensatz: "",
        beispiel:
          "Zusammenfassend hat sich sagen lassen, dass wir erfolgreich gewesen sind.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Zusammenfassend hatte sich sagen lassen, dass wir erfolgreich gewesen waren",
        nebensatz: "",
        beispiel:
          "Zusammenfassend hatte sich sagen lassen, dass wir erfolgreich gewesen waren.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Zusammenfassend wird sich sagen lassen, dass wir erfolgreich sein werden",
        nebensatz: "",
        beispiel:
          "Zusammenfassend wird sich sagen lassen, dass wir erfolgreich sein werden.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Zusammenfassend wird sich gesagt haben lassen, dass wir erfolgreich gewesen sein werden",
        nebensatz: "",
        beispiel:
          "Zusammenfassend wird sich gesagt haben lassen, dass wir erfolgreich gewesen sein werden.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Zusammenfassend ließe sich sagen, dass wir erfolgreich wären",
        nebensatz: "",
        beispiel:
          "Zusammenfassend ließe sich sagen, dass wir erfolgreich wären.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "Zusammenfassend lasse sich sagen, dass man erfolgreich sei",
        nebensatz: "",
        beispiel: "Zusammenfassend lasse sich sagen, dass man erfolgreich sei.",
      },
    ],
  },
  {
    kategorie: "VERSTÄRKENDE KONNEKTOREN",
    konnektor: "umso mehr",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das gilt umso mehr in dieser Situation",
        nebensatz: "",
        beispiel: "Das gilt umso mehr in dieser Situation.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das galt umso mehr in dieser Situation",
        nebensatz: "",
        beispiel: "Das galt umso mehr in dieser Situation.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das hat umso mehr in dieser Situation gegolten",
        nebensatz: "",
        beispiel: "Das hat umso mehr in dieser Situation gegolten.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das hatte umso mehr in dieser Situation gegolten",
        nebensatz: "",
        beispiel: "Das hatte umso mehr in dieser Situation gegolten.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das wird umso mehr in dieser Situation gelten",
        nebensatz: "",
        beispiel: "Das wird umso mehr in dieser Situation gelten.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das wird umso mehr in dieser Situation gegolten haben",
        nebensatz: "",
        beispiel: "Das wird umso mehr in dieser Situation gegolten haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das würde umso mehr in dieser Situation gelten",
        nebensatz: "",
        beispiel: "Das würde umso mehr in dieser Situation gelten.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das gelte umso mehr in dieser Situation",
        nebensatz: "",
        beispiel: "Man sagt, das gelte umso mehr in dieser Situation.",
      },
    ],
  },
  {
    kategorie: "VERSTÄRKENDE KONNEKTOREN",
    konnektor: "zumal",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ich komme gern",
        nebensatz: "zumal das Wetter schön ist",
        beispiel: "Ich komme gern, zumal das Wetter schön ist.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ich kam gern",
        nebensatz: "zumal das Wetter schön war",
        beispiel: "Ich kam gern, zumal das Wetter schön war.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Ich bin gern gekommen",
        nebensatz: "zumal das Wetter schön gewesen ist",
        beispiel: "Ich bin gern gekommen, zumal das Wetter schön gewesen ist.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Ich war gern gekommen",
        nebensatz: "zumal das Wetter schön gewesen war",
        beispiel: "Ich war gern gekommen, zumal das Wetter schön gewesen war.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Ich werde gern kommen",
        nebensatz: "zumal das Wetter schön sein wird",
        beispiel: "Ich werde gern kommen, zumal das Wetter schön sein wird.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Ich werde gern gekommen sein",
        nebensatz: "zumal das Wetter schön gewesen sein wird",
        beispiel:
          "Ich werde gern gekommen sein, zumal das Wetter schön gewesen sein wird.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Ich würde gern kommen",
        nebensatz: "zumal das Wetter schön wäre",
        beispiel: "Ich würde gern kommen, zumal das Wetter schön wäre.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "man komme gern",
        nebensatz: "zumal das Wetter schön sei",
        beispiel: "Man sagt, man komme gern, zumal das Wetter schön sei.",
      },
    ],
  },
  {
    kategorie: "VERSTÄRKENDE KONNEKTOREN",
    konnektor: "erst recht",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Das gilt für alle",
        nebensatz: "erst recht für dich",
        beispiel: "Das gilt für alle, erst recht für dich.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Das galt für alle",
        nebensatz: "erst recht für dich",
        beispiel: "Das galt für alle, erst recht für dich.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Das hat für alle gegolten",
        nebensatz: "erst recht für dich",
        beispiel: "Das hat für alle gegolten, erst recht für dich.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Das hatte für alle gegolten",
        nebensatz: "erst recht für dich",
        beispiel: "Das hatte für alle gegolten, erst recht für dich.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Das wird für alle gelten",
        nebensatz: "erst recht für dich",
        beispiel: "Das wird für alle gelten, erst recht für dich.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "Das wird für alle gegolten haben",
        nebensatz: "erst recht für dich",
        beispiel: "Das wird für alle gegolten haben, erst recht für dich.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Das würde für alle gelten",
        nebensatz: "erst recht für dich",
        beispiel: "Das würde für alle gelten, erst recht für dich.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "das gelte für alle",
        nebensatz: "erst recht für einen",
        beispiel: "Man sagt, das gelte für alle, erst recht für einen.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "sofern",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "schließen wir die Sitzung",
        nebensatz: "sofern keine Fragen bestehen",
        beispiel: "Sofern keine Fragen bestehen, schließen wir die Sitzung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "schlossen wir die Sitzung",
        nebensatz: "sofern keine Fragen bestanden",
        beispiel: "Sofern keine Fragen bestanden, schlossen wir die Sitzung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "haben wir die Sitzung geschlossen",
        nebensatz: "sofern keine Fragen bestanden haben",
        beispiel:
          "Sofern keine Fragen bestanden haben, haben wir die Sitzung geschlossen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatten wir die Sitzung geschlossen",
        nebensatz: "sofern keine Fragen bestanden hatten",
        beispiel:
          "Sofern keine Fragen bestanden hatten, hatten wir die Sitzung geschlossen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir die Sitzung schließen",
        nebensatz: "sofern keine Fragen bestehen werden",
        beispiel:
          "Sofern keine Fragen bestehen werden, werden wir die Sitzung schließen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir die Sitzung geschlossen haben",
        nebensatz: "sofern keine Fragen bestanden haben werden",
        beispiel:
          "Sofern keine Fragen bestanden haben werden, werden wir die Sitzung geschlossen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würden wir die Sitzung schließen",
        nebensatz: "sofern keine Fragen bestünden",
        beispiel:
          "Sofern keine Fragen bestünden, würden wir die Sitzung schließen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "schließe man die Sitzung",
        nebensatz: "sofern keine Fragen bestünden",
        beispiel:
          "Man sagt, sofern keine Fragen bestünden, schließe man die Sitzung.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "vorausgesetzt (dass)",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "fahren wir ans Meer",
        nebensatz: "vorausgesetzt, dass das Wetter gut ist",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut ist, fahren wir ans Meer.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "fuhren wir ans Meer",
        nebensatz: "vorausgesetzt, dass das Wetter gut war",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut war, fuhren wir ans Meer.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "sind wir ans Meer gefahren",
        nebensatz: "vorausgesetzt, dass das Wetter gut gewesen ist",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut gewesen ist, sind wir ans Meer gefahren.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "waren wir ans Meer gefahren",
        nebensatz: "vorausgesetzt, dass das Wetter gut gewesen war",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut gewesen war, waren wir ans Meer gefahren.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir ans Meer fahren",
        nebensatz: "vorausgesetzt, dass das Wetter gut sein wird",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut sein wird, werden wir ans Meer fahren.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir ans Meer gefahren sein",
        nebensatz: "vorausgesetzt, dass das Wetter gut gewesen sein wird",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut gewesen sein wird, werden wir ans Meer gefahren sein.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würden wir ans Meer fahren",
        nebensatz: "vorausgesetzt, dass das Wetter gut wäre",
        beispiel:
          "Vorausgesetzt, dass das Wetter gut wäre, würden wir ans Meer fahren.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "fahre man ans Meer",
        nebensatz: "vorausgesetzt, dass das Wetter gut sei",
        beispiel:
          "Man sagt, vorausgesetzt, dass das Wetter gut sei, fahre man ans Meer.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "unter der Voraussetzung, dass",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "führen wir das Projekt durch",
        nebensatz: "unter der Voraussetzung, dass alle zustimmen",
        beispiel:
          "Unter der Voraussetzung, dass alle zustimmen, führen wir das Projekt durch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "führten wir das Projekt durch",
        nebensatz: "unter der Voraussetzung, dass alle zustimmten",
        beispiel:
          "Unter der Voraussetzung, dass alle zustimmten, führten wir das Projekt durch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "haben wir das Projekt durchgeführt",
        nebensatz: "unter der Voraussetzung, dass alle zugestimmt haben",
        beispiel:
          "Unter der Voraussetzung, dass alle zugestimmt haben, haben wir das Projekt durchgeführt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "hatten wir das Projekt durchgeführt",
        nebensatz: "unter der Voraussetzung, dass alle zugestimmt hatten",
        beispiel:
          "Unter der Voraussetzung, dass alle zugestimmt hatten, hatten wir das Projekt durchgeführt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "werden wir das Projekt durchführen",
        nebensatz: "unter der Voraussetzung, dass alle zustimmen werden",
        beispiel:
          "Unter der Voraussetzung, dass alle zustimmen werden, werden wir das Projekt durchführen.",
      },
      {
        zeit: "Futur II",
        hauptsatz: "werden wir das Projekt durchgeführt haben",
        nebensatz: "unter der Voraussetzung, dass alle zugestimmt haben werden",
        beispiel:
          "Unter der Voraussetzung, dass alle zugestimmt haben werden, werden wir das Projekt durchgeführt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "würden wir das Projekt durchführen",
        nebensatz: "unter der Voraussetzung, dass alle zustimmen würden",
        beispiel:
          "Unter der Voraussetzung, dass alle zustimmen würden, würden wir das Projekt durchführen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "führe man das Projekt durch",
        nebensatz: "unter der Voraussetzung, dass alle zustimmten",
        beispiel:
          "Man sagt, unter der Voraussetzung, dass alle zustimmten, führe man das Projekt durch.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "unbeschadet + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten setzen wir die Arbeit fort",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten setzen wir die Arbeit fort.",
      },
      {
        zeit: "Präteritum",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten setzten wir die Arbeit fort",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten setzten wir die Arbeit fort.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten haben wir die Arbeit fortgesetzt",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten haben wir die Arbeit fortgesetzt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten hatten wir die Arbeit fortgesetzt",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten hatten wir die Arbeit fortgesetzt.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten werden wir die Arbeit fortsetzen",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten werden wir die Arbeit fortsetzen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten werden wir die Arbeit fortgesetzt haben",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten werden wir die Arbeit fortgesetzt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Unbeschadet der aktuellen Schwierigkeiten würden wir die Arbeit fortsetzen",
        nebensatz: "",
        beispiel:
          "Unbeschadet der aktuellen Schwierigkeiten würden wir die Arbeit fortsetzen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz:
          "unbeschadet der aktuellen Schwierigkeiten setze man die Arbeit fort",
        nebensatz: "",
        beispiel:
          "Man sagt, unbeschadet der aktuellen Schwierigkeiten setze man die Arbeit fort.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "ungeachtet + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Ungeachtet der Kritik halten wir an unserem Plan fest",
        nebensatz: "",
        beispiel: "Ungeachtet der Kritik halten wir an unserem Plan fest.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Ungeachtet der Kritik hielten wir an unserem Plan fest",
        nebensatz: "",
        beispiel: "Ungeachtet der Kritik hielten wir an unserem Plan fest.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Ungeachtet der Kritik haben wir an unserem Plan festgehalten",
        nebensatz: "",
        beispiel:
          "Ungeachtet der Kritik haben wir an unserem Plan festgehalten.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Ungeachtet der Kritik hatten wir an unserem Plan festgehalten",
        nebensatz: "",
        beispiel:
          "Ungeachtet der Kritik hatten wir an unserem Plan festgehalten.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Ungeachtet der Kritik werden wir an unserem Plan festhalten",
        nebensatz: "",
        beispiel:
          "Ungeachtet der Kritik werden wir an unserem Plan festhalten.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Ungeachtet der Kritik werden wir an unserem Plan festgehalten haben",
        nebensatz: "",
        beispiel:
          "Ungeachtet der Kritik werden wir an unserem Plan festgehalten haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Ungeachtet der Kritik würden wir an unserem Plan festhalten",
        nebensatz: "",
        beispiel:
          "Ungeachtet der Kritik würden wir an unserem Plan festhalten.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "ungeachtet der Kritik halte man an seinem Plan fest",
        nebensatz: "",
        beispiel:
          "Man sagt, ungeachtet der Kritik halte man an seinem Plan fest.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "vermittels + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Vermittels dieser Technologie lösen wir das Problem",
        nebensatz: "",
        beispiel: "Vermittels dieser Technologie lösen wir das Problem.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Vermittels dieser Technologie lösten wir das Problem",
        nebensatz: "",
        beispiel: "Vermittels dieser Technologie lösten wir das Problem.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Vermittels dieser Technologie haben wir das Problem gelöst",
        nebensatz: "",
        beispiel: "Vermittels dieser Technologie haben wir das Problem gelöst.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Vermittels dieser Technologie hatten wir das Problem gelöst",
        nebensatz: "",
        beispiel:
          "Vermittels dieser Technologie hatten wir das Problem gelöst.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Vermittels dieser Technologie werden wir das Problem lösen",
        nebensatz: "",
        beispiel: "Vermittels dieser Technologie werden wir das Problem lösen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Vermittels dieser Technologie werden wir das Problem gelöst haben",
        nebensatz: "",
        beispiel:
          "Vermittels dieser Technologie werden wir das Problem gelöst haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Vermittels dieser Technologie würden wir das Problem lösen",
        nebensatz: "",
        beispiel: "Vermittels dieser Technologie würden wir das Problem lösen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "vermittels dieser Technologie löse man das Problem",
        nebensatz: "",
        beispiel:
          "Man sagt, vermittels dieser Technologie löse man das Problem.",
      },
    ],
  },
  {
    kategorie: "ZUSÄTZLICHE WICHTIGE B2-C1 KONNEKTOREN",
    konnektor: "kraft + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Kraft seines Amtes trifft er diese Entscheidung",
        nebensatz: "",
        beispiel: "Kraft seines Amtes trifft er diese Entscheidung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Kraft seines Amtes traf er diese Entscheidung",
        nebensatz: "",
        beispiel: "Kraft seines Amtes traf er diese Entscheidung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "Kraft seines Amtes hat er diese Entscheidung getroffen",
        nebensatz: "",
        beispiel: "Kraft seines Amtes hat er diese Entscheidung getroffen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "Kraft seines Amtes hatte er diese Entscheidung getroffen",
        nebensatz: "",
        beispiel: "Kraft seines Amtes hatte er diese Entscheidung getroffen.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "Kraft seines Amtes wird er diese Entscheidung treffen",
        nebensatz: "",
        beispiel: "Kraft seines Amtes wird er diese Entscheidung treffen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Kraft seines Amtes wird er diese Entscheidung getroffen haben",
        nebensatz: "",
        beispiel:
          "Kraft seines Amtes wird er diese Entscheidung getroffen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "Kraft seines Amtes würde er diese Entscheidung treffen",
        nebensatz: "",
        beispiel: "Kraft seines Amtes würde er diese Entscheidung treffen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "kraft seines Amtes treffe er diese Entscheidung",
        nebensatz: "",
        beispiel: "Man sagt, kraft seines Amtes treffe er diese Entscheidung.",
      },
    ],
  },
  {
    kategorie: "WEITERE WICHTIGE ZUSAMMENGESETZTE KONNEKTOREN",
    konnektor: "im Hinblick auf + Akkusativ",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz:
          "Im Hinblick auf die Zukunft investieren wir in neue Technologien",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft investieren wir in neue Technologien.",
      },
      {
        zeit: "Präteritum",
        hauptsatz:
          "Im Hinblick auf die Zukunft investierten wir in neue Technologien",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft investierten wir in neue Technologien.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Im Hinblick auf die Zukunft haben wir in neue Technologien investiert",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft haben wir in neue Technologien investiert.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Im Hinblick auf die Zukunft hatten wir in neue Technologien investiert",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft hatten wir in neue Technologien investiert.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Im Hinblick auf die Zukunft werden wir in neue Technologien investieren",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft werden wir in neue Technologien investieren.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Im Hinblick auf die Zukunft werden wir in neue Technologien investiert haben",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft werden wir in neue Technologien investiert haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Im Hinblick auf die Zukunft würden wir in neue Technologien investieren",
        nebensatz: "",
        beispiel:
          "Im Hinblick auf die Zukunft würden wir in neue Technologien investieren.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz:
          "im Hinblick auf die Zukunft investiere man in neue Technologien",
        nebensatz: "",
        beispiel:
          "Man sagt, im Hinblick auf die Zukunft investiere man in neue Technologien.",
      },
    ],
  },
  {
    kategorie: "WEITERE WICHTIGE ZUSAMMENGESETZTE KONNEKTOREN",
    konnektor: "in Anbetracht + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "In Anbetracht der Umstände handeln wir vorsichtig",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände handeln wir vorsichtig.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "In Anbetracht der Umstände handelten wir vorsichtig",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände handelten wir vorsichtig.",
      },
      {
        zeit: "Perfekt",
        hauptsatz: "In Anbetracht der Umstände haben wir vorsichtig gehandelt",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände haben wir vorsichtig gehandelt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz: "In Anbetracht der Umstände hatten wir vorsichtig gehandelt",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände hatten wir vorsichtig gehandelt.",
      },
      {
        zeit: "Futur I",
        hauptsatz: "In Anbetracht der Umstände werden wir vorsichtig handeln",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände werden wir vorsichtig handeln.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "In Anbetracht der Umstände werden wir vorsichtig gehandelt haben",
        nebensatz: "",
        beispiel:
          "In Anbetracht der Umstände werden wir vorsichtig gehandelt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz: "In Anbetracht der Umstände würden wir vorsichtig handeln",
        nebensatz: "",
        beispiel: "In Anbetracht der Umstände würden wir vorsichtig handeln.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "in Anbetracht der Umstände handle man vorsichtig",
        nebensatz: "",
        beispiel: "Man sagt, in Anbetracht der Umstände handle man vorsichtig.",
      },
    ],
  },
  {
    kategorie: "WEITERE WICHTIGE ZUSAMMENGESETZTE KONNEKTOREN",
    konnektor: "im Zuge + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Im Zuge der Digitalisierung ändern sich viele Prozesse",
        nebensatz: "",
        beispiel: "Im Zuge der Digitalisierung ändern sich viele Prozesse.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Im Zuge der Digitalisierung änderten sich viele Prozesse",
        nebensatz: "",
        beispiel: "Im Zuge der Digitalisierung änderten sich viele Prozesse.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Im Zuge der Digitalisierung haben sich viele Prozesse geändert",
        nebensatz: "",
        beispiel:
          "Im Zuge der Digitalisierung haben sich viele Prozesse geändert.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Im Zuge der Digitalisierung hatten sich viele Prozesse geändert",
        nebensatz: "",
        beispiel:
          "Im Zuge der Digitalisierung hatten sich viele Prozesse geändert.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Im Zuge der Digitalisierung werden sich viele Prozesse ändern",
        nebensatz: "",
        beispiel:
          "Im Zuge der Digitalisierung werden sich viele Prozesse ändern.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Im Zuge der Digitalisierung werden sich viele Prozesse geändert haben",
        nebensatz: "",
        beispiel:
          "Im Zuge der Digitalisierung werden sich viele Prozesse geändert haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Im Zuge der Digitalisierung würden sich viele Prozesse ändern",
        nebensatz: "",
        beispiel:
          "Im Zuge der Digitalisierung würden sich viele Prozesse ändern.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "im Zuge der Digitalisierung änderten sich viele Prozesse",
        nebensatz: "",
        beispiel:
          "Man sagt, im Zuge der Digitalisierung änderten sich viele Prozesse.",
      },
    ],
  },
  {
    kategorie: "WEITERE WICHTIGE ZUSAMMENGESETZTE KONNEKTOREN",
    konnektor: "zum Zwecke + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz: "Zum Zwecke der Verbesserung führen wir Umfragen durch",
        nebensatz: "",
        beispiel: "Zum Zwecke der Verbesserung führen wir Umfragen durch.",
      },
      {
        zeit: "Präteritum",
        hauptsatz: "Zum Zwecke der Verbesserung führten wir Umfragen durch",
        nebensatz: "",
        beispiel: "Zum Zwecke der Verbesserung führten wir Umfragen durch.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Zum Zwecke der Verbesserung haben wir Umfragen durchgeführt",
        nebensatz: "",
        beispiel:
          "Zum Zwecke der Verbesserung haben wir Umfragen durchgeführt.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Zum Zwecke der Verbesserung hatten wir Umfragen durchgeführt",
        nebensatz: "",
        beispiel:
          "Zum Zwecke der Verbesserung hatten wir Umfragen durchgeführt.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Zum Zwecke der Verbesserung werden wir Umfragen durchführen",
        nebensatz: "",
        beispiel:
          "Zum Zwecke der Verbesserung werden wir Umfragen durchführen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Zum Zwecke der Verbesserung werden wir Umfragen durchgeführt haben",
        nebensatz: "",
        beispiel:
          "Zum Zwecke der Verbesserung werden wir Umfragen durchgeführt haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Zum Zwecke der Verbesserung würden wir Umfragen durchführen",
        nebensatz: "",
        beispiel:
          "Zum Zwecke der Verbesserung würden wir Umfragen durchführen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz: "zum Zwecke der Verbesserung führe man Umfragen durch",
        nebensatz: "",
        beispiel:
          "Man sagt, zum Zwecke der Verbesserung führe man Umfragen durch.",
      },
    ],
  },
  {
    kategorie: "WEITERE WICHTIGE ZUSAMMENGESETZTE KONNEKTOREN",
    konnektor: "unter Berücksichtigung + Genitiv",
    beispiele: [
      {
        zeit: "Präsens",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren treffen wir eine Entscheidung",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren treffen wir eine Entscheidung.",
      },
      {
        zeit: "Präteritum",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren trafen wir eine Entscheidung",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren trafen wir eine Entscheidung.",
      },
      {
        zeit: "Perfekt",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren haben wir eine Entscheidung getroffen",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren haben wir eine Entscheidung getroffen.",
      },
      {
        zeit: "Plusquamperfekt",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren hatten wir eine Entscheidung getroffen",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren hatten wir eine Entscheidung getroffen.",
      },
      {
        zeit: "Futur I",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren werden wir eine Entscheidung treffen",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren werden wir eine Entscheidung treffen.",
      },
      {
        zeit: "Futur II",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren werden wir eine Entscheidung getroffen haben",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren werden wir eine Entscheidung getroffen haben.",
      },
      {
        zeit: "Konjunktiv II",
        hauptsatz:
          "Unter Berücksichtigung aller Faktoren würden wir eine Entscheidung treffen",
        nebensatz: "",
        beispiel:
          "Unter Berücksichtigung aller Faktoren würden wir eine Entscheidung treffen.",
      },
      {
        zeit: "Konjunktiv I",
        hauptsatz:
          "unter Berücksichtigung aller Faktoren treffe man eine Entscheidung",
        nebensatz: "",
        beispiel:
          "Man sagt, unter Berücksichtigung aller Faktoren treffe man eine Entscheidung.",
      },
    ],
  },
];

// Tek ekranda görünen, düzenlenmiş CSS yapısıyla optimize edilmiş versiyon
// Kullanıcı aynı component içinde tüm alanları tek ekranda görebilir.

export default function KonnektorCard() {
  const [konnektorIndex, setKonnektorIndex] = useState(0);
  const [zeitIndex, setZeitIndex] = useState(0);

  useEffect(() => {
    const savedKonnektor = localStorage.getItem("konnektorIndex");
    const savedZeit = localStorage.getItem("zeitIndex");

    if (savedKonnektor !== null) setKonnektorIndex(Number(savedKonnektor));
    if (savedZeit !== null) setZeitIndex(Number(savedZeit));
  }, []);

  const saveToLocal = (k, z) => {
    localStorage.setItem("konnektorIndex", k);
    localStorage.setItem("zeitIndex", z);
  };

  const handleNextZeit = () => {
    setZeitIndex((prev) => {
      const next =
        prev === currentKonnektor.beispiele.length - 1 ? 0 : prev + 1;
      saveToLocal(konnektorIndex, next);
      return next;
    });
  };

  const handlePrevKonnektor = () => {
    setKonnektorIndex((prev) => {
      const newIndex = prev === 0 ? konnektorenData.length - 1 : prev - 1;
      saveToLocal(newIndex, 0);
      return newIndex;
    });
    setZeitIndex(0);
  };

  const handleNextKonnektor = () => {
    setKonnektorIndex((prev) => {
      const newIndex = prev === konnektorenData.length - 1 ? 0 : prev + 1;
      saveToLocal(newIndex, 0);
      return newIndex;
    });
    setZeitIndex(0);
  };

  const handleZeitClick = (i) => {
    setZeitIndex(i);
    saveToLocal(konnektorIndex, i);
  };

  const currentKonnektor = konnektorenData[konnektorIndex];
  const currentBeispiel = currentKonnektor.beispiele[zeitIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-xl p-6 space-y-8">
        {/* ÜST NAV */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevKonnektor}
            className="p-3 rounded-full bg-slate-700 hover:bg-slate-600"
          >
            ◀
          </button>

          <div className="text-center">
            <h1 className="text-4xl font-bold">{currentKonnektor.konnektor}</h1>
            <p className="text-lg text-slate-300">
              {currentKonnektor.kategorie}
            </p>
            <p className="text-xs opacity-70 mt-1">
              {konnektorIndex + 1} / {konnektorenData.length}
            </p>
          </div>

          <button
            onClick={handleNextKonnektor}
            className="p-3 rounded-full bg-slate-700 hover:bg-slate-600"
          >
            ▶
          </button>
        </div>

        {/* CÜMLE KUTUSU */}
        <div className="bg-slate-700 rounded-xl p-6 shadow-xl text-center space-y-6">
          <p className="text-2xl font-semibold text-slate-100 leading-relaxed">
            {currentBeispiel.beispiel}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-base">
            <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-lg border border-indigo-500/30">
              {currentBeispiel.hauptsatz}
            </span>

            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30">
              {currentBeispiel.nebensatz}
            </span>
          </div>
        </div>

        {/* ZAMAN BUTONLARI */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currentKonnektor.beispiele.map((item, index) => (
            <button
              key={index}
              onClick={() => handleZeitClick(index)}
              className={`py-3 px-4 rounded-lg font-medium border transition-all duration-200 text-sm sm:text-base
                ${
                  zeitIndex === index
                    ? "bg-indigo-600 border-indigo-500 shadow-lg"
                    : "bg-slate-700 border-slate-600 hover:bg-slate-600"
                }`}
            >
              {item.zeit}
            </button>
          ))}
        </div>

        {/* İLERİ */}
        <div className="text-center">
          <button
            onClick={handleNextZeit}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg rounded-full font-bold shadow-lg hover:scale-105 transition-all"
          >
            İleri ▶
          </button>
          <p className="text-xs text-slate-400 mt-2">
            {zeitIndex + 1} / {currentKonnektor.beispiele.length} zaman
          </p>
        </div>
      </div>
    </div>
  );
}
