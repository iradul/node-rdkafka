TEMPLATE = app
CONFIG += console c++11
CONFIG -= app_bundle
CONFIG -= qt

DEPENDPATH += \
    deps/librdkafka/src-cpp \
    deps/librdkafka/src

INCLUDEPATH += \
    /usr/include/node \
    node_modules/nan \
    build/deps \
    build/Debug/obj.target/node-librdkafka/src
#    build/Debug \
#    deps/librdkafka/src

SOURCES += \
    src/*.cc

HEADERS += \
    src/*.h
