// app/(tabs)/search.tsx - YELLOW THEME (already correct)
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FEATURED = [
  {
    id: "1",
    title: "Daily Conversations",
    chinese: "日常对话",
    icon: "message-circle",
    color: "#FF6B6B",
  },
  {
    id: "2",
    title: "Chinese Characters",
    chinese: "汉字",
    icon: "type",
    color: "#4ECDC4",
  },
  {
    id: "3",
    title: "Pinyin Mastery",
    chinese: "拼音",
    icon: "volume-2",
    color: "#FFD166",
  },
  {
    id: "4",
    title: "Shopping Vocabulary",
    chinese: "购物词汇",
    icon: "shopping-bag",
    color: "#06D6A0",
  },
];

const CATEGORIES = [
  { id: "1", title: "Vocabulary", icon: "book", count: 125 },
  { id: "2", title: "Grammar", icon: "edit-3", count: 42 },
  { id: "3", title: "Listening", icon: "headphones", count: 68 },
  { id: "4", title: "Speaking", icon: "mic", count: 35 },
  { id: "5", title: "Reading", icon: "book-open", count: 89 },
  { id: "6", title: "Writing", icon: "pen-tool", count: 56 },
];

const SEARCHES = ["你好怎么读？", "谢谢怎么写？", "基本问候语", "数字1-100"];

export default function ExplorerScreen() {
  return (
    <View style={styles.screen}>
      {/* Header - YELLOW */}
      <View style={styles.header}>
        <Text style={styles.title}>Explorer</Text>
        <Text style={styles.subtitle}>Discover new lessons</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Feather name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Search lessons...</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Featured */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FEATURED.map((item) => (
              <TouchableOpacity key={item.id} style={styles.featuredCard}>
                <View
                  style={[
                    styles.featuredIcon,
                    { backgroundColor: item.color },
                  ]}>
                  <Feather name={item.icon as any} size={24} color="#fff" />
                </View>
                <Text style={styles.featuredTitle}>{item.title}</Text>
                <Text style={styles.featuredChinese}>{item.chinese}</Text>
                <TouchableOpacity style={styles.startBtn}>
                  <Text style={styles.startBtnText}>Start</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Feather name={cat.icon as any} size={20} color="#f0c829" />
                </View>
                <Text style={styles.categoryTitle}>{cat.title}</Text>
                <Text style={styles.categoryCount}>{cat.count}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Searches</Text>
          <View style={styles.chips}>
            {SEARCHES.map((text, i) => (
              <TouchableOpacity key={i} style={styles.chip}>
                <Feather name="search" size={14} color="#666" />
                <Text style={styles.chipText}>{text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f8f9fa" },
  header: {
    backgroundColor: "#f0c829",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#333", marginBottom: 4 },
  subtitle: { fontSize: 16, color: "#666" },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -20,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  searchText: { fontSize: 16, color: "#999", marginLeft: 12, flex: 1 },

  scrollContent: {
    paddingBottom: 40,
  },
  section: { paddingHorizontal: 20, marginTop: 30, marginBottom: 10 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },

  featuredCard: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  featuredIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  featuredChinese: { fontSize: 14, color: "#666", marginBottom: 16 },
  startBtn: {
    backgroundColor: "#f0c829",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  startBtnText: { color: "#333", fontSize: 14, fontWeight: "600" },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fef9e7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  categoryCount: { fontSize: 12, color: "#666" },

  chips: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  chipText: { fontSize: 14, color: "#666" },
});
